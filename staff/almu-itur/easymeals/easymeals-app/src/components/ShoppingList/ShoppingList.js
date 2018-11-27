import React, { Component } from 'react'
import logic from '../../logic'
import InputForm from '../InputForm'
import Meal from '../Meal/Meal'
import { Button } from "mdbreact"
import './ShoppingList.css'

class ShoppingList extends Component {
    state = { flag }

    render() {

        return <div className="shopping-list-container">
            <div className="shopping-list-menu-summary">
                  <div className="day">
                        <h3>MONDAY</h3>
                  </div>
                  <div className="shopping-list-meal-time">
                        <div className="mealTimeName"><h2>BREAKFAST</h2></div>
                        <div className="mealTimeName"><h2>MIDMORNING</h2></div> 
                        <div className="mealTimeName"><h2>LUNCH</h2></div>
                        <div className="mealTimeName"><h2>AFTERNOON</h2></div> 
                        <div className="mealTimeName"><h2>DINNER</h2></div>  
                  </div>
                  <div className="shopping-list-meal"></div>
            </div>
            <div className="shopping-list-ingredients">

            </div>
            <Button onClick={this.props.closeShoppingList}>CLOSE</Button>
        </div >
    }
}

export default ShoppingList
