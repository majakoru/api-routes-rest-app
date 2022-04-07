import {
    books
} from "../json/books";

export default function handler(req, res) {
    const {
        bookId
    } = req.query;
    if (req.method === 'GET') {
        try {
            const book = books.find(book => book.id === parseInt(bookId));
            console.log(book);
            res.status(200)
                .json(book)
        } catch (err) {
            res.status(500)
                .json({
                    error: 'no book found with that id'
                })
        }
    } else if (req.method === 'DELETE') {
        const deletedbook = books.find(
            book => book.id === parseInt(bookId)
        );
        const index = books.findIndex(
            book => book.id === parseInt(bookId)
        );
        books.splice(index, 1);
        res.status(200)
            .json(deletedbook)
    }
}
