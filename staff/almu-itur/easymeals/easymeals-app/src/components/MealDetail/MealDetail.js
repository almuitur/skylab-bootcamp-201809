import React, { Component } from 'react'
import { Button } from "mdbreact"
import './MealDetail.css'

class MealDetail extends Component {
    state = {}

    render() {
        const diet = () => {
            
            switch (this.props.state.meal) {
                case 0: return 'vegan'
                case 1: return 'vegetarian'
                case 2: return 'pescatarian'
                case 3: return 'flexitarian'
            }
        }

        return <div className="meal-detail-whole-page-container">
            <div className="meal-detail-container">
            {/* <div className="meal-detail-left-container"><img src={require(this.props.state.mealDetail.imageLink) || require('../../images/default-meal.jpg')} alt='vegan' /></div> */}

            <div className="meal-detail-right-container">
                {/* <div className="meal-detail-right-container-container">
                    <div className="meal-detail-right-container-container-title">{this.props.state.mealDetail.name}</div>
                    <div className="meal-detail-right-container-container-diet">{diet}</div>
                    <div className="meal-detail-right-container-container-ingredients">
                        <div className="meal-detail-right-container-container-ingredients-main">
                            <ul>{this.props.state.mealDetail.mainIngredients.map(mainIngredient => <li>{mainIngredient}</li>)}</ul>
                        </div>
                        <div className="meal-detail-right-container-container-ingredients-optional">
                            <ul>{this.props.state.mealDetail.mainIngredients.map(mainIngredient => <li>{mainIngredient}</li>)}</ul>
                        </div>
                    </div>
                    <div className="meal-detail-right-container-container-intolerances">
                        <ul>{this.props.state.mealDetail.intolerances.map(intolerance => <li>{intolerance}</li>)}</ul>
                    </div>
                    <div className="meal-detail-right-container-container-link">{this.props.state.mealDetail.recipeLink}</div>
                </div> */}
                <div className="meal-detail-right-container-button"><Button onClick={this.props.closeMealDetail}>CLOSE</Button></div>
            </div>
        </div>
        </div>
        }
}
        
export default MealDetail