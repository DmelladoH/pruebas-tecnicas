import { Section } from "../components/section"
import { useBooks } from "../hooks/useBooks"
import { useMyList } from "../hooks/useMyList"
import { Book } from "../types"

export function Home(){
    const {myList} = useMyList()
    const {booksByCategory, books} = useBooks()
    
    return(
        <main className='p-5 grid gap-3'>
            { myList.length > 0 && <Section title='Mi lista' books={myList}/>}
            {

            Object.keys(booksByCategory).map((key: string) => (
                <Section title={key} books={booksByCategory[key].books.slice(0,9)} />
            ))
            }

 
            <Section title="Todos" books={books.slice(0,10)} />
            
            
        </main>
    )
}