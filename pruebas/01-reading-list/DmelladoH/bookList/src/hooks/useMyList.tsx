import { useContext } from "react";
import { myListContext } from "../context/myListContext";

export function useMyList() {
    const context = useContext(myListContext)

    if(context === undefined) {
        throw new Error('useMyList must be used within a MyListProvider')
    }

    return context
}