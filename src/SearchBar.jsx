import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ showSearchBar }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <>
            {showSearchBar ? (
                <>
                    <input onChange={handleChange} autoFocus />
                    <pre>{query} </pre>
                </>
            ) : (
                <img src='wrongSrc' alt='search-icon' />
            )}
        </>
    );
};

SearchBar.propTypes = {
    showSearchBar: PropTypes.oneOf(["warning", "error"]).isRequired,
};

export default SearchBar;
