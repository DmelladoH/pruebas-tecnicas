import { useRoute } from "wouter";
import { useBooks } from "../hooks/useBooks"
import { BookCard } from "../components/bookCard";
import { GridDisplay } from "../components/gridDIsplay";



export function Category(){
    const [_, params] = useRoute('/category/:category');
    const decodedValue = decodeURIComponent(params?.category || '');

    const {books, booksByCategory} = useBooks()

    let tile = ''
    let booksToDisplay =  []

    if(decodedValue === 'Todos'){
        tile = 'Todos'
        booksToDisplay = books
    }else{
        booksToDisplay = booksByCategory[decodedValue].books 
    }
    
    if(!booksToDisplay.length)
        return (
            <main>
                <h4>No se encontraron libros para esta categoría</h4>
            </main>
        ) 

    return(
        <main>
           <h4>{tile}</h4> 
           <GridDisplay>
                    {
                        booksToDisplay.map(book => (
                            <li key={book.ISBN}>
                                <BookCard book={book} />
                            </li>
                        ))
                    }
                         
           </GridDisplay>
        </main>
        
    )
}