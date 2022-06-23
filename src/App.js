import React, { useEffect } from "react";
// import { fetch } from "whatwg-fetch";

const App = () => {
    useEffect(() => {
        fetch("indexameee.html");
    }, []);
    return <div></div>;
};

export default App;
