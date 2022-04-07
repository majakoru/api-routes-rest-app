import {
    useState
} from 'react'

function BooksPage() {
    const [title, setTitle] = useState([])
    const [pages, setPages] = useState([])
    const [lan, setLan] = useState([])
    const [books, setBooks] = useState([])

    const deleteBook = async (bookId) => {
        const response = await fetch(`/api/books/${bookId}`, {
            method: 'DELETE'
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        fetchBooks()
    };
    const fetchBooks = async () => {
        const response = await fetch('/api/books');
        const data = await response.json();
        console.log(data);
        setBooks(data)
    };

    const submitBook = async () => {
        const response = await fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify({
                title,
                pages,
                language: lan
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data)
    };
    return (
        <>
        <div align="center">
            {"Title: "}<input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
            <br/>
            {"Pages: "}<input
            type='text'
            value={pages}
            onChange={e => setPages(e.target.value)}
        />
            <br/>
            {"Language: "}<input
            type='text'
            value={lan}
            onChange={e => setLan(e.target.value)}
        />
            <br/>
            <button onClick={submitBook}>Submit book</button>
        </div>

        <div align="center">
        <button  onClick={fetchBooks}>Get the latest books</button>
        </div> {
        books.map(book => {
            return (
                <div align="center" key={book.id}>
                    {book.id}.<br/>
                    {"Title: "}{book.title}.<br/>
                    {"Pages: "} {book.pages}.<br/>
                    {"Language: "}{book.language} <br/>
                    <button onClick={() => deleteBook(book.id)}>Delete</button>
                    <hr/>
                </div>
            )
        })
    } </>
)
}

export default BooksPage
