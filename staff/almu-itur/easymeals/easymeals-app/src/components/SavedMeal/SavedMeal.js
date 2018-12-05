import React, {Component} from 'react'
import logic from '../../logic'
import './SavedMeal.css'

class SavedMeal extends Component {
    state = { name: ''}

    componentDidMount() {
        logic.retrieveMeal(this.props.id)
        .then((meal => this.setState({ name: meal.name })))
        .catch(err => Error(err))        
    }

    render() {
        return <div className="saved-container">
        <div className="saved-name">{this.state.name}</div>
        {this.props.openMealPlan && <div className="saved-date">{logic.getDate(this.props.date)}</div>}
        <div className="saved-delete-icon">
            {this.props.openMealPlan && <a onClick={() => this.props.openMealPlan(this.props.mealplan)}><i className="far fa-folder-open"></i></a>}
            <a onClick={() => this.props.deleteSaved(this.props.id)}><i className="fas fa-times"></i></a>
        </div>
    </div>
    }   
}

export default SavedMeal