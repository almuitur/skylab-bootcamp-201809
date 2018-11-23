import React, { Component } from 'react'
import logic from '../../logic'
import InputForm from '../InputForm'
import Meal from '../Meal'
import { Button } from "mdbreact"
import './MealPlan.css'

class MealPlan extends Component {
    state = { mealPlan: {} }

    componentDidMount() {

        let _mealPlan = sessionStorage.getItem('mealPlan')
        let mealPlan = JSON.parse(_mealPlan)

        { this.setState({ mealPlan }) }
    }

    // handleSubmit = text => {
    // try {
    //     logic.addPostit(text)
    //         .then(() => logic.listPostits())
    //         .then(postits => this.setState({ postits }))
    // } catch ({ message }) {
    //     alert(message) // HORROR! FORBIDDEN! ACHTUNG!
    // }
    // }

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
        const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
        // let keys = Object.keys(this.state.mealPlan.days[0][0])

        return <div className="meal-plan">

            <h1>Meal Plan</h1>

            <p>{this.state.mealPlan.name}</p>

            {/* <InputForm onSubmit={this.handleSubmit} /> */}

            {/* DIAS DE LA SEMANA */}
            <div className="meal-plan-days-container">{days.map(day => <h4 className="meal-plan-day">{day}</h4>)}</div>


            {/* UN DIA */}
            <div className="meal-plan-meals-container">{ this.state.mealPlan.days && this.state.mealPlan.days.map((meal, mealIndex) => {
                return <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, `mondaybreakfast`)}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    { this.state.mealPlan.days[0][{mealIndex}] ? this.state.mealPlan.days[0][{mealIndex}].breakfast.status = `mondaybreakfast` : null }
                    {/* { console.log(this.state.mealPlan.days[0][{mealIndex}]) } */}
                    {/* {  this.state.mealPlan.days[0][{mealIndex}] ? this.state.mealPlan.days[0][{mealIndex}].breakfast.name : null } */}
                    
                    { this.state.mealPlan.days[0][{mealIndex}] ? this.state.mealPlan.days[0][mealIndex].breakfast.filter(meal => meal.status === `mondaybreakfast`).map(meal => <Meal key={meal.id} id={meal.id} text={meal.text} status={meal.status} draggable onDragStart={event => this.dragStart(event, meal.id, meal.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />) : null }
                </div>
            })}
            </div>

            {/* {this.state.mealPlan.days ? <p> {this.state.mealPlan.days[0][0].breakfast.name} </p> : null}
            {this.state.mealPlan.days ? <p> {this.state.mealPlan.days[0][0].breakfast.name} </p> : null}
            {this.state.mealPlan.days ? <p> {this.state.mealPlan.days[0][0].breakfast.name} </p> : null}
            {this.state.mealPlan.days ? <p> {this.state.mealPlan.days[0][2].breakfast.name} </p> : null}
             */}
            {/* // 

                        // <h2 className="day-meal">SNACK</h2>
                        // <h2 className="day-meal">LUNCH</h2>
                        // <h2 className="day-meal">SNACK</h2>
                        // <h2 className="day-meal">DINNER</h2> */}


            {/* <div className="meal-plan-meals-container">
            
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
            </div> */}

            {/* <div className="meal-plan-meals-container">

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
            </div> */}
            <div>
                <Button onSubmit={this.handleSubmit}>PRINT</Button>
                <Button onSubmit={this.handleSubmit}>SHOPPING LIST</Button>
                <Button onSubmit={this.handleSubmit}>SAVE</Button>
                <Button onSubmit={this.handleSubmit}>SHARE</Button>
            </div>
        </div >
    }
}

export default MealPlan
