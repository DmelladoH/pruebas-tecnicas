import { useMyList } from "../hooks/useMyList";
import { Book } from "../types";

export function BookCard({ book }: { book: Book }) {
    const {myList, addToList, removeFromList} = useMyList();

    
    const isBookAdded = myList.some((b: Book) => b.ISBN === book.ISBN)
    const handleAddToList = () => {
        if(isBookAdded){
            removeFromList(book)
            return
        }

        addToList(book)
    }
    return(

        <article className={"max-h-[320px] relative max-w-[213px] overflow-hidden card grid min-w-fit min-h-fit justify-items-center rounded-sm" + isBookAdded ?? "opacity-30"}>
            <a href="#">
                <figure>
                    <img src={book.cover} alt={book.title} className="max-h-[320px] max-w-[213px] object-cover"/>
                </figure>
            </a>
            <div className="overlay card-hover:border-l-0">
                <div className="menu">
                    <button tabIndex={1} className="menu-toggle" onClick={handleAddToList} id="menu-toggle-1" >
                        <div aria-hidden="true">{isBookAdded ? '-' : '+'}</div>
                        <div className="sr-only">open menu</div>
                    </button>
                </div>
            </div>
        </article>
    )
}