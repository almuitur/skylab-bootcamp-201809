import React, { Component } from 'react'
import './ShoppingList.css'

class ShoppingList extends Component {
    state = { flag: null }

    render() {
        const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
        const mealsDay = ['breakfast', 'midMorning', 'lunch', 'afternoon', 'dinner']

        return <div className="shopping-list-container">

        <h1>Shopping List</h1>

            <div className="shopping-list-menu-summary">
                <div className="shopping-list-day">
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
                    <div className="shopping-list-ingredients"></div>
                    <div className="meal-detail-right-container-button"><button className="btn btn-unique" id="shopping-list-button" onClick={this.props.onCloseShoppingListClick}>CLOSE</button></div>
                </div>
            </div >
        </div>
    }
}

export default ShoppingList
