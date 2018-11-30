import React, { Component } from 'react'
import logic from '../../logic'
import Saved from '../Saved/Saved'
import './MyMeals.css'

class MyMeals extends Component {

    state = { savedMealPlans: [], savedCustomPlans: [], favouriteMeals: [], mealsToAvoid: [] }

    componentDidMount() {
        logic.retrieveUser()
            .then((res) => this.setState({ favouriteMeals: res.favouriteMeals, savedMealPlans: res.savedMealPlans, savedCustomPlans: res.savedCustomPlans, mealsToAvoid: res.mealsToAvoid }))
            .catch(err => Error(err))
    }

    handleDeleteSaved = id => {
        // logic.deleteFavouriteMeal(id)
        //  .then(res => this.setState({ favouriteMeals: res }))
        //  .catch(err => this.setState({error: err}))    
    }

    handleDeleteMealPlan = id => {
         // logic.removeMealFromAvoidList(id)
        //  .then(res => this.setState({ mealsToAvoid: res }))
        //  .catch(err => this.setState({error: err}))    
    }

    handleDeleteSavedCustomMealPlan = id => {
         // logic.removeMealFromAvoidList(id)
        //  .then(res => this.setState({ mealsToAvoid: res }))
        //  .catch(err => this.setState({error: err}))    
    }

    handleDeleteMealToAvoid = id => {
        // logic.removeMealFromAvoidList(id)
        //  .then(res => this.setState({ mealsToAvoid: res }))
        //  .catch(err => this.setState({error: err}))    
    }

    render() {
        return <div className="my-meals-container">

            <h2 className="my-meals-main-title">My Meals </h2>

            <h3 className="my-meals-title">My Meal Plans</h3>
            <div>
                {this.state.savedMealPlans ? <div><h1 className="my-meals-nothing-found">No favourite meal plans added yet.</h1></div> 
                : <div className="my-meals-item-saved">{this.state.savedMealPlans.map(mealPlan => <Saved key={mealPlan.id} id={mealPlan.id} name={mealPlan.name} date={mealPlan.date} deleteSaved={this.handleDeleteSaved} />)}</div> }
            </div>

            <h3 className="my-meals-title">My Custom Plans</h3>
            <div>
                {this.state.savedCustomPlans ? <div><h1 className="my-meals-nothing-found">No favourite custom meal plans saved yet.</h1></div>
                : <div className="my-meals-item-saved">{this.state.savedCustomPlans.map(customPlan => <Saved key={customPlan.id} id={customPlan.id} name={customPlan.name} deleteSaved={this.handleDeleteSaved} />)}</div> }   
            </div>

            <h3 className="my-meals-title">My Favourite Meals</h3>
            <div>
                {this.state.favouriteMeals ? <div><h1 className="my-meals-nothing-found">No favourite meals added yet to your favourite meals list.</h1></div> 
                : <div className="my-meals-item-saved">{this.state.favouriteMeals.map(meal => <Saved key={meal.id} id={meal.id} name={meal.name} deleteSaved={this.handleDeleteSaved} />)}</div>} }
            </div>

            <h3 className="my-meals-title">Meals to Avoid</h3>
            <div>
                {this.state.mealsToAvoid ? <div><h1 className="my-meals-nothing-found">No meals added yet to your meals to avoid list.</h1></div>
                : <div className="my-meals-favourite-meals">{this.state.mealsToAvoid.map(meal => <Saved key={meal.id} id={meal.id} img={meal.imageLink} name={meal.name} deleteFavouriteMeal={this.handleDeleteFavouriteMeal} />)}</div>} }
            </div >

        </div>
    }
}

export default MyMeals