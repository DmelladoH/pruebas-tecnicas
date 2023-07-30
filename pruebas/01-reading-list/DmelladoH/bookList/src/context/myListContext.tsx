
import { createContext, useState } from 'react'
import { Book } from '../types'
import { useSyncStorage } from '../hooks/useSyncStorage'

export type MyListContextType = {
    myList: Book[],
    addToList: (book: Book) => void,
    removeFromList: (book: Book) => void
}

export const myListContext = createContext<MyListContextType | undefined>(undefined)

export function MyListProvider({ children }: { children: React.ReactNode }) {
    const [myList, setMyList] = useSyncStorage<Book[]>('myList', [])
    
    const addToList = (book: Book) => {
        const isBookInList = myList.findIndex((b: Book) => b.ISBN === book.ISBN) >= 0
        if(!isBookInList){
            setMyList((prevState: Book[]) => [...prevState, book]) 
        }
    }

    const removeFromList = (book: Book) => {
        setMyList(myList.filter((b: Book) => b.ISBN !== book.ISBN))
    }

    return (
        <myListContext.Provider value={{ myList, addToList, removeFromList }}>
            {children}
        </myListContext.Provider>
    )
}