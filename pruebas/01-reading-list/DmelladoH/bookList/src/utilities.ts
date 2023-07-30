import { Book, Library } from "./types";
import data from '../../../books.json';

export function getBooksParsed(): Book[] {
    const jsonData: Library = data;
    const books: Book[] = jsonData.library.map(item => item.book);
    return books;
}