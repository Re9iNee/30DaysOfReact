import React from "react";

import Home from "../views/Home/Home";
import About from "../views/About/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='about' element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
