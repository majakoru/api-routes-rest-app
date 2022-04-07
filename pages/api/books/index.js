import {
    books
} from "./json/books";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200)
            .json(books)
    } else if (req.method === 'POST') {
        const title = req.body.title;
        const pages = req.body.pages;
        const language = req.body.language;
        const newBook = {
            id: Date.now(),
            title,
            pages,
            language
        };
        books.push(newBook);
        res.status(201)
            .json(newBook)
    }
}
