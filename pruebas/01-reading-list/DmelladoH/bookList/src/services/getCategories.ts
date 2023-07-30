import { getBooksParsed } from "../utilities";

export function getCategories(): Promise<Set<string>> {
    return new Promise((resolve) => {
        const books = getBooksParsed();
        const categories = new Set(books.map(book => book.genre));
        
        setTimeout(() => {
            resolve(categories);
        }, 1000);
    })
}