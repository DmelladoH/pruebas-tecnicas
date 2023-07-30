import { useEffect, useContext, useMemo } from "react"
import { getBooks } from "../services/getBooks"
import { Book, Category } from "../types"
import { BooksContext } from "../context/BooksContext"



export function useBooks(){
    const context = useContext(BooksContext)
  
    if(context === undefined) {
      throw new Error('useBooks must be used within a BooksProvider')
    }

    const {books, setBooks} = context
    const booksByCategory = useMemo(() => sortBooksByCategory(books), [books]);
  
    useEffect(() => {
      getBooks()
      .then(books => setBooks(books))
      .catch(error => console.log(error))
    }, [])
 
    function getCategoryList(books: Book[]): Set<string> {
      const categories = new Set<string>();
      books.forEach(book => categories.add(book.genre))
      return categories;
    }
 
    function sortBooksByCategory(books: Book[]): Record<string, Category> {
      const sortedBooks: Record<string, Category> = {};
      
      for (const book of books) {
        const { genre } = book;

        sortedBooks[genre] = sortedBooks[genre] || {
          name: genre,
          books: [],
        };

        sortedBooks[genre].books.push(book);
      }

      return sortedBooks;
    }



    return {books, booksByCategory, getCategoryList}
}