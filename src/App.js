import React, { useState } from "react";
import SearchBar from "./SearchBar";

const App = () => {
    const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);
    const toggleSearchBarVisibility = () => {
        setIsSearchbarVisible((prev) => !prev);
    };

    return (
        <header
            onClick={toggleSearchBarVisibility}
            style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "coral",
            }}
        >
            <img src='wrongSrc' alt='Header Icon' />
            <SearchBar showSearchBar={isSearchbarVisible} />
        </header>
    );
};

export default App;
