import { use } from "react";
import { createContext, useState,useContext, useEffect } from "react";  

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs))}
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites]);

    const addToFavorite = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorite = (movie) => {
        setFavorites(prev => prev.filter((m) => m.id !== movie.id))
    }


    const isFavorite = (movie) => {
        return favorites.some((m) => m.id === movie.id)
    }

    const value = {
        favorites,
        addToFavorite,
        removeFromFavorite,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}