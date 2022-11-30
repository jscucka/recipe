import React from "react";
import "../styles/recipe.scss";
const Recipe = (props) => {
    return(
        <div className="recipe">
            <div className="image">
                <img src ={props.image} alt={props.title}/>
            </div>
            
            <div className="recipe-properties">
                <h1>{props.title}</h1>
                <p>{props.calories}</p>
                <button>Find</button>
            </div>
        </div>
    );

}

export default Recipe;