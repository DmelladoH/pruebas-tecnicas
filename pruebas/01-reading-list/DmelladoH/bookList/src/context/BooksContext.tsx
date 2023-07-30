import { createContext, useState } from "react";
import { Book } from "../types";

interface BooksContextType {
    books: Book[];
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}
export const BooksContext = createContext<BooksContextType | undefined>(undefined);

export function BooksProvider({ children }: { children: React.ReactNode }) {
    const [books, setBooks] = useState<Book[]>([]);
    
    return (
        <BooksContext.Provider value={{ books, setBooks }}>
            {children}
        </BooksContext.Provider>
    );
}
