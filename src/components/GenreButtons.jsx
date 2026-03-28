export default function GenreButtons({ genre, isVisible, onClick }) {
    return (
        <div>
            <button onClick={() => onClick(genre)}>{isVisible? "Hide": "Show"} {genre}</button>
        </div>
    )
}