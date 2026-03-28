export default function BookCard ({ title, author, price }) {
    return (
        <div>
            <p>{title}, {author}, ${price}</p>
        </div>
    )
}