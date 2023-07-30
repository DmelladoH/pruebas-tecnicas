import { BookCard } from "../components/bookCard";
import { GridDisplay } from "../components/gridDIsplay";
import { useMyList } from "../hooks/useMyList";
import { Book } from "../types";

export function MyList(){
    const {myList} = useMyList()
    return(
        <main>
            <h4>My List</h4>
            <GridDisplay>
                    {
                        myList.map((book: Book) => (
                            <li key={book.ISBN}>
                                <BookCard book={book} />
                            </li>
                        ))
                    }
                         
           </GridDisplay>
        </main>
    )
}