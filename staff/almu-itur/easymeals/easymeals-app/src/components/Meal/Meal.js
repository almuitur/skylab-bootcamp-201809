import React, { Component } from 'react'
import './Meal.css'

class Meal extends Component {
    state = { 
        name: this.props.name,
        status: this.props.status
    }
    
    render() {

        return (
        <div className="meal" draggable onDragStart={this.props.onDragStart} >

            {/* <textarea defaultValue={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} /> */}
            <p className = "meal-font" onClick={() => this.props.onMealDetailClick(this.props.id)}>{this.state.name}</p>
            <div className="options-meal">
                <a onClick={() => this.props.onNewMeal(this.props.id)}><i id = "meal-icon" className="fas fa-random"></i></a>
                <a onClick={() => this.props.onFavouriteMealClick(this.props.id)} ><i id="meal-icon" className="fas fa-heart"></i></a>
                <a onClick={() => this.props.onRemoveMealFromMealPlan(this.props.id, this.props.status)}><i id = "meal-icon" className="fas fa-times"></i></a>
                <a onClick={() => this.props.onAvoidMeal(this.props.id)}><i id = "meal-icon" className="fas fa-ban"></i></a>
            </div>
        </div>
        )
    }
}

export default Meal