import React from 'react'
import './MealDetail.css'

function MealDetail(props) { 

    return <div className="meal-detail-whole-page-container">
        <div className="meal-detail-container">
            <div className="meal-detail-left-container"><img src={props.mealDetail.imageLink || require('../../images/default-meal.jpg')} alt='meal' /></div>

            <div className="meal-detail-right-container">
                <div className="meal-detail-right-container-container">
                    <div className="meal-detail-right-container-container-title">{props.mealDetail.name}</div>
                    <div className="meal-detail-right-container-container-ingredients">
                        <div className="meal-detail-right-container-container-ingredients-main">
                            <p className="meal-detail-right-container-container-ingredients-keyword">Main ingredients</p>
                            {props.mealDetail.mainIngredients.map(mainIngredient => <li>{mainIngredient}</li>)}
                        </div>
                        <div className="meal-detail-right-container-container-ingredients-optional">
                            <p className="meal-detail-right-container-container-ingredients-keyword">Optional ingredients</p>
                            <ul>{props.mealDetail.optionalIngredients.map(optionalIngredient => <li>{optionalIngredient}</li>)}</ul>
                        </div>
                    </div>
                    <div className="meal-detail-right-container-container-intolerances">
                        <ul>{props.mealDetail.intolerances.map(intolerance => <li>{intolerance}</li>)}</ul>
                    </div>
                    <div className="meal-detail-right-container-container-link">{props.mealDetail.recipeLink}</div>
                </div>
                <div className="meal-detail-right-container-button"><button className="btn btn-unique" id="meal-detail-button" onClick={props.onCloseMealDetailClick}>CLOSE</button></div>
            </div>
        </div>
    </div>
}

export default MealDetail