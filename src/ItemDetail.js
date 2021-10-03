import React, { useState, useEffect } from "react";

const ItemDetail = ({ match }) => {
    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
        const data = await fetchItem.json();
        setItem(data.data.item);
        console.log(data.data.item)
    };

    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.information} alt="" />
        </div>
    );
};

export default ItemDetail;
