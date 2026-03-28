export default function BookCard ({ title, author, price }) {
    return (
        <div>
            <p><em>{title}</em>, {author}, ${price}</p>
        </div>
    )
}