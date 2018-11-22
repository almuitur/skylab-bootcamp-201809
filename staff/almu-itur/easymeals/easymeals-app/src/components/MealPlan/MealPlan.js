import React, { Component } from 'react'
import logic from '../../logic'
import InputForm from '../InputForm'
import Meal from '../Meal'
import { Button } from "mdbreact"
import './MealPlan.css'

class MealPlan extends Component {
    state = { mealPlan: [] }

    // componentDidMount() {
    //     // logic.listpostits()
    //     //     .then(postits => { this.setState({ postits }) })

    //     // // TODO error handling!
    // }

    handleSubmit = text => {
        // try {
        //     logic.addPostit(text)
        //         .then(() => logic.listPostits())
        //         .then(postits => this.setState({ postits }))
        // } catch ({ message }) {
        //     alert(message) // HORROR! FORBIDDEN! ACHTUNG!
        // }
    }

    // TODO error handling!

    handleRemoveMeal = id => {
        // logic.removePostit(id)
        //     .then(() => logic.listPostits())
        //     .then(postits => this.setState({ postits }))
        // // TODO error handling!
    }

    handleModifyMeal = (id, text, status) => {
        // logic.modifyPostit(id, text, status)
        //     .then(() => logic.listPostits())
        //     .then(postits => this.setState({ postits }))
        // TODO error handling!
    }

    handleNewMeal = (id) => {
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

    dragStart = (event, mealId, text) => {
        event.dataTransfer.setData('id', mealId)
        event.dataTransfer.setData('text', text)
    }

    dragOver = event => {
        event.preventDefault()
    }

    onDrop = (event, status) => {

        const idMeal = event.dataTransfer.getData('id')
        const textMeal = event.dataTransfer.getData('text')

        this.handleModifyMeal(idMeal, textMeal, status)
    }

    render() {

        // let mealPlan = { 
        //     mondayBreak: [], 
        //     mondayLunch: [], 
        //     tuesdayBreak: [],
        //     tuesdayLunch: [],
        //     wednesdayBreak: [],
        //     wednesdayLunch: [],
        //     thursdayBreak: [], 
        //     thursdayLunch: [], 
        //     fridayBreak: [], 
        //     fridayLunch: [], 
        //     saturdayBreak: [], 
        //     saturdayLunch: [], 
        //     sundayBreak: [], 
        //     sundayLunch: [] }

        return <div className="meal-plan">
            <h1>Meal Plan</h1>
            <InputForm onSubmit={this.handleSubmit} />

            <div className="meal-plan-days-container">
                <h4 className="meal-plan-day">MONDAY</h4>
                <h4 className="meal-plan-day">TUESDAY</h4>
                <h4 className="meal-plan-day">WEDNESDAY</h4>
                <h4 className="meal-plan-day">THURSDAY</h4>
                <h4 className="meal-plan-day">FRIDAY</h4>
                <h4 className="meal-plan-day">SATURDAY</h4>
                <h4 className="meal-plan-day">SUNDAY</h4>
            </div>

            <div className="meal-plan-meals-container">

                          
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'mondayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.mealPlan.filter(meal => meal.status === 'mondayBreak').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'tuesdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.mealPlan.filter(meal => meal.status === 'tuesdayBreak').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'wednesdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                 
                    {this.state.mealPlan.filter(meal => meal.status === 'wednesdayBreak').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'thursdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.mealPlan.filter(meal => meal.status === 'thursdayBreak').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'fridayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.mealPlan.filter(meal => meal.status === 'fridayBreak').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'saturdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.mealPlan.filter(meal => meal.status === 'saturdayBreak').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'sundayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                   
                    {this.state.mealPlan.filter(meal => meal.status === 'sundayBreak').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleFindMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
            </div>

            <div className="meal-plan-meals-container">

                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'mondayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                  
                    {this.state.mealPlan.filter(meal => meal.status === 'mondayLunch').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'tuesdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                  
                    {this.state.mealPlan.filter(meal => meal.status === 'tuesdayLunch').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'wednesdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                   
                    {this.state.mealPlan.filter(meal => meal.status === 'wednesdayLunch').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'thursdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                   
                    {this.state.mealPlan.filter(meal => meal.status === 'thursdayLunch').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'fridayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                  
                    {this.state.mealPlan.filter(meal => meal.status === 'fridayLunch').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'saturdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                 
                    {this.state.mealPlan.filter(meal => meal.status === 'saturdayLunch').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'sundayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                 
                    {this.state.mealPlan.filter(meal => meal.status === 'sundayLunch').map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleFindMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
            </div>
            <div>
                <Button onSubmit={this.handleSubmit}>PRINT</Button> 
                <Button onSubmit={this.handleSubmit}>SHOPPING LIST</Button> 
                <Button onSubmit={this.handleSubmit}>SAVE</Button> 
                <Button onSubmit={this.handleSubmit}>SHARE</Button> 
            </div>
        </div>
    }
}

export default MealPlan
