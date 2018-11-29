import React, { Component } from 'react'
import logic from '../../logic'
import FavouriteMeals from '../FavouriteMeals/FavouriteMeals'
import { Input } from "mdbreact"
import './MyMeals.css'

class MyMeals extends Component {

    state = { favouriteMeals: [] }

    componentDidMount() {

        this.retrieveFavouriteMeals()

    }

    handleDeleteFavouriteMeal = (id) => {

        logic.deleteFavouriteMeal(id)

            .then(res => this.setState({ favouriteMeals: res }))

        // .catch(err => this.setState({error: err}))    

    }

    retrieveFavouriteMeals() {
        try {

            logic.retrieveFavouriteMeals()

                .then(res => { this.setState({ favouriteMeals: res }) })

            // .catch(err => this.setState({ error: err }))

        }
        catch (err) { alert('error') }
    }

    render() {
        return <div className="my-meals-container">

            <h3 className="my-meals-title">My Saved Meals Plans</h3>
            <div className="saved-meals-plans">
                <img className="saved-meals-img" src={require('../../images/vegan.png')} alt="vegan" />
                <img className="saved-meals-img" src={require('../../images/vegetarian.png')} alt="vegetarian" />
                <img className="saved-meals-img" src={require('../../images/pescatarian.png')} alt="pescatarian" />
            </div>

            <h3 className="my-meals-title">My Custom Plans</h3>
            <div className="saved-custom-plans">
                <img className="saved-meals-img" src={require('../../images/vegan.png')} alt="vegan" />
                <img className="saved-meals-img" src={require('../../images/vegetarian.png')} alt="vegetarian" />
                <img className="saved-meals-img" src={require('../../images/pescatarian.png')} alt="pescatarian" />
            </div>

            <h3 className="my-meals-title">My Favourite Meals</h3>
            {!this.state.favouriteMeals && <div className="my-meals-no-favourite-meals"><h1 className>No favourite meals added yet.</h1></div>}
            {this.state.favouriteMeals && <div className="my-meals-favourite-meals">{this.state.favouritesList.map(meal => <FavouriteMeals key={meal.id} id={meal.id} img={meal.imageLink} name={meal.name} deleteFavouriteMeal={this.handleDeleteFavouriteMeal} />)}
            </div>}

            <h3 className="my-meals-title">Meals to Avoid</h3>
            <div className="saved-avoid-meals">
                <img className="saved-meals-img" src={require('../../images/vegan.png')} alt="vegan" />
                <img className="saved-meals-img" src={require('../../images/vegetarian.png')} alt="vegetarian" />
                <img className="saved-meals-img" src={require('../../images/pescatarian.png')} alt="pescatarian" />
            </div >

        </div>
    }
}

export default MyMeals