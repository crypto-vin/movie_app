import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites){
        return (
            <div className="favorites">
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        )
    }

    return <div className="favorites-empty">
        <h2>No Favorites yet</h2>
        <p>Add some movies for them to appear here</p>
    </div>
}

export default Favorites