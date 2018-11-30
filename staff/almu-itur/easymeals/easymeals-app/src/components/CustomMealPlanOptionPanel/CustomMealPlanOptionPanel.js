import React, { Component } from 'react'
import './CustomMealPlanOptionPanel.css'

class CustomMealPlanOptionPanel extends Component {
    state = {}

    render() {
        return <div className="custom-meal-plan-option-panel-whole-page-container">
            <div className="custom-meal-plan-option-panel-container">
                <p>Please select an option:</p>
                <div className="custom-meal-plan-option-panel-buttons-container">
                    <button className="btn btn-unique">NEW</button>
                    <button className="btn btn-unique">OPEN</button> 
                </div>
            </div>
        </div>
    }
}

export default CustomMealPlanOptionPanel
