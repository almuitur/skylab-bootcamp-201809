import React, { Component } from 'react'
import logic from '../../logic'
import InputForm from '../InputForm'
import Meal from '../Meal/Meal'
import { Button } from "mdbreact"
import './MealPlan.css'

class MealPlan extends Component {
    state = { mealPlan: {}, shoppingList: null }

    componentDidMount() {
        
        let _mealPlan = sessionStorage.getItem('mealPlan')
        let mealPlan = JSON.parse(_mealPlan)
        
        { this.setState({ mealPlan }) }
    }

    // findMeal = text => {
    // try {
    //     logic.findMeal(text)
    //         .then(() => logic.listPostits())
    //         .then(postits => this.setState({ postits }))
    // } catch ({ message }) {
    //     alert(message) // HORROR! FORBIDDEN! ACHTUNG!
    // }
    // }

    handleModifyMeal = (id, name, status) => {
        // logic.modifyPostit(id, name, status)
        //     .then(() => logic.listPostits())
        //     .then(postits => this.setState({ postits }))
        // TODO error handling!
    }

    handleMoveMeal = (id, name, status, previousState) => {
        let mealPlan = logic.moveMeal(id, name, status, previousState)

        { this.setState({ mealPlan }) }
    }

    handleRemoveMeal = (id, status) => {
        let mealPlan = logic.removeMeal(id, status)
        
        { this.setState({ mealPlan }) }
    }

    handleNewMeal = id => {
        console.log('NewMeal')
    }

    handleFindMeal = (id) => {
        console.log('FindMeal')
    }

    handleLikeMeal = (id) => {
        console.log('LikeMeal')
    }

    handleAvoidMeal = (id) => {
        console.log('AvoidMeal')
    }

    handleShoppingList = () => {

        let shoppingList = logic.generateShoppingList()
        
        { this.setState({ shoppingList }) }
    }

    closeShoppingList = () => {
        { this.setState({ shoppingList: null }) }
    }

    handlePrint = () => {

    }

    handleSave = () => {

    }

    handleShare = () => {

    }

    dragStart = (event, mealId, name, state) => {
        event.dataTransfer.setData('id', mealId)
        event.dataTransfer.setData('name', name)
        event.dataTransfer.setData('state', state)
    }

    dragOver = event => {
        event.preventDefault()
    }

    onDrop = (event, status) => {

        const idMeal = event.dataTransfer.getData('id')
        const nameMeal = event.dataTransfer.getData('name')
        const previousState = event.dataTransfer.getData('state')

        this.handleMoveMeal(idMeal, nameMeal, status, previousState)
    }

    render() {
        const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
        const mealsDay = ['breakfast', 'midMorning', 'lunch', 'afternoon', 'dinner']

        return <div className="meal-plan">

            <h1>Meal Plan</h1>

            <p>{this.state.mealPlan.name}</p>

            <InputForm onSubmit={this.handleSubmit} />

            <div className="meal-plan-days-container">
                {days.map(day => <h4 className="meal-plan-day">{day}</h4>)}
            </div>

            {mealsDay.map(mealTime => {
                return <div className="meal-plan-meals-container">
                    {this.state.mealPlan.days && this.state.mealPlan.days.map((day, dayIndex) => {
                        return <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, `${day.day}${mealTime}`)}>
                            <h2 className="day-meal">{mealTime.toUpperCase()}</h2>
                            {this.state.mealPlan.days && this.state.mealPlan.days[dayIndex][mealTime].length > 0 && this.state.mealPlan.days[dayIndex][mealTime].map(meal => <Meal key={meal.id} id={meal.id} name={meal.name} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.name, meal.status)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                        </div>
                    })}
                </div>
            })}
            <div>
                <Button onClick={this.handlePrint}>PRINT</Button>
                <Button onClick={this.handleShoppingList}>SHOPPING LIST</Button>
                <Button onClick={this.handleSave}>SAVE</Button>
                <Button onClick={this.handleShare}>SHARE</Button>
            </div>
            
            {this.state.shoppingList &&
                <div>
                    {/* <ShoppingList closeShoppingList={this.handleCloseShoppingList}/> */}
                </div>
            }

        </div >
    }
}

export default MealPlan