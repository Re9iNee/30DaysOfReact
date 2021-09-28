import React, { useContext } from "react";
import { MovieContext } from "../contexts/movieContext";

export default function MovieList() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <ul>
            {movies.map((movie) => (
                <li>
                    {movie.title}
                    <pre>released in {movie.released}</pre>
                </li>
            ))}
        </ul>
    );
}
