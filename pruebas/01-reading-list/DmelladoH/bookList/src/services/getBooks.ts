import { Book } from '../types';
import { getBooksParsed } from '../utilities';

export function getBooks(): Promise<Book[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getBooksParsed());
        }, 1000);
    })
}

