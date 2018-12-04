import React, { Component } from 'react'
import './ShoppingList.css'

class ShoppingList extends Component {
    state = { flag: null }

    render() {
        const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
        const mealsDay = ['breakfast', 'midMorning', 'lunch', 'afternoon', 'dinner']

        return <div className="shopping-list-container">

        <h1>Shopping List</h1>
        {this.props.mealplan && 
        
            <p>{this.props.mealplan.name}</p> }  

            <div className="shopping-list-menu-summary">
                <div className="shopping-list-day-container">
                        <div className="day">
                        
                            {/* {this.props.mealplan && <p>{this.props.mealplan[index].day.toUpperCase()}</p>} */}
                    </div>
                    <div className="shopping-list-meal-time">
                        <div className="mealTimeName"><h4>BREAKFAST</h4></div>
                        <div className="mealTimeName"><h4>MIDMORNING</h4></div>
                        <div className="mealTimeName"><h4>LUNCH</h4></div>
                        <div className="mealTimeName"><h4>AFTERNOON</h4></div>
                        <div className="mealTimeName"><h4>DINNER</h4></div>
                    </div>
                    <div className="shopping-list-ingredients">
                        <div className="shopping-list-meal"></div>
                        <div className="shopping-list-main-ingredients"><h5>Main</h5></div>
                        <div className="shopping-list-optional-ingredients"><h5>Optional</h5></div>                    
                    </div>
                    

                </div>
            </div >
            <div className="meal-detail-right-container-button"><button className="meal-plan-button" id="shopping-list-button" onClick={this.props.onCloseShoppingListClick}>CLOSE</button></div>
        </div>
    }
}

export default ShoppingList
