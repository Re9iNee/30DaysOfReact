import React from "react";
import ReactDOM from "react-dom";
import MovieList from "./components/Movielist";
import Nav from "./components/Navbar";
import AddMovie from "./components/addMovie";
import { MovieProvider } from "./contexts/movieContext";

export default function App() {
    return (
        <MovieProvider>
            <AddMovie />
            <Nav />
            <MovieList />
        </MovieProvider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
