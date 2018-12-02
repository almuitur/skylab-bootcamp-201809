import React, { Component } from 'react'
import './Ingredient.css'

class Ingredient extends Component {
    state = { 
        name: this.props.text
     }

    render() {

        return <div >
                <a onClick={() => this.props.onRemoveIngredient(this.props.id)}><i className="fas fa-times"></i></a>
            </div>
    }
}

export default Ingredient