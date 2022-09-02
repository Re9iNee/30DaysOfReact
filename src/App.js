import React, { useState, useEffect } from "react";

function App() {
    const [pState, setPState] = useState(false);

    useEffect(() => {
        console.log("Use effect parent. " + pState);

        return () => {
            console.log(
                "Parent cleanup function called. Current State: " + pState
            );
        };
    }, [pState]);

    const pChangeHandler = () => {
        setPState((prevP) => {
            return !prevP;
        });
    };

    console.log("Parent component rendered. " + pState);
    return (
        <div className='App'>
            <button onClick={pChangeHandler}>Change P State</button>
        </div>
    );
}

export default App;
