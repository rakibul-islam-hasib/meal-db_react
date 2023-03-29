import React from 'react';
import './Card.css';
const Card = ({ data }) => {
    console.log('From Card', data)
    const { strMealThumb, strMeal , strArea, strCategory , strInstructions } = data;
    return (
        <div>
            <div className="card">
                <div className="card-img">
                    <img src={strMealThumb} alt="" />
                </div>
                <div className="card-body">
                    <h3>{strMeal}</h3>
                    <p>Area : {strArea}</p>
                    <p>Category : {strCategory}</p>
                    <p>Details : </p>
                    <p>{strInstructions.slice(0 , 60)}... <a href="">see  more</a></p>
                </div>
                <button className='btn'>Add To list </button>
            </div>
        </div>
    );
};

export default Card;