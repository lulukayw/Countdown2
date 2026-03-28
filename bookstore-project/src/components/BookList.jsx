import BookCard from "./BookCard";

export default function BookList({ books, genre, show }) {
    return !show? null : (
        <div>
            <h2>{genre}</h2>
            {books.map((book, index) => (
                <div key={index}>
                    <BookCard title={book.title} author={book.author} price={book.price} />
                </div>
            ))}
        </div>
    )
};