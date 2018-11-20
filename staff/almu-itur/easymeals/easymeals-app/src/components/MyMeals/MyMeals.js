import React, { Component } from 'react'
import { Input } from "mdbreact"
import './MyMeals.css'

class MyMeals extends Component {

    state = { postits: [] }

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
            <div className="saved-fav-meals">
            <img className="saved-meals-img" src={require('../../images/vegan.png')} alt="vegan" />
            <img className="saved-meals-img" src={require('../../images/vegetarian.png')} alt="vegetarian" />
            <img className="saved-meals-img" src={require('../../images/pescatarian.png')} alt="pescatarian" />
            </div>

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