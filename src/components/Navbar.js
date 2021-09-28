import React, { useContext } from "react";
import { MovieContext } from "../contexts/movieContext";

export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return <h1>We have {movies.length} movies </h1>;
}
