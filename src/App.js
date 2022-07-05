import React, { useEffect, useState, useTransition } from "react";
import { dummyReq } from "./dummyReq";

const App = () => {
    const [data, setData] = useState();
    const [isPending, startTransition] = useTransition(true);

    const handleClick = () => {
        startTransition(() => {
            // get data
            dummyReq().then((res) => setData(res));
        });
    };

    useEffect(() => {
        console.log(isPending);
        debugger;
    }, [isPending]);

    return (
        <div>
            <h1>Loading ...</h1>
            {isPending && <h1>Loading ...</h1>}
            <button onClick={handleClick}>'pre' + {data}</button>
        </div>
    );
};

export default App;
