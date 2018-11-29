import React from 'react'
import './FavouriteMeals.css'

function FavouriteMeals(props) {

    return <div className="favourite-meals-container">

        <div className="favourite-meals-left-container"><img src={props.img || require('../../images/default-meal.jpg')} alt='meal' /></div>
        <div className="favourite-meals-center-container">{props.name}</div>
        <div className="favourite-meals-right-container"><a onClick={() => props.deleteFavouriteMeal(props.id)}><i className="fas fa-heart"></i></a></div>
    </div>
}

export default FavouriteMeals