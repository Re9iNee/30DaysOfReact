import React from "react";
import style from "./recipe.module.scss";

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingerdient) => (
                    <li>{ingerdient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt='' />
        </div>
    );
};

export default Recipe;
