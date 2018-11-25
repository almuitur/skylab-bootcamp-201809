import React, { Component } from 'react'

class Meal extends Component {
    state = { 
        name: this.props.name,
        status: this.props.status
     }

    handleChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleBlur = () => {
        this.props.onModifyMeal(this.props.id, this.state.name, this.props.status)
    }

    render() {

        return (
        <div className="meal" draggable onDragStart={this.props.onDragStart} >

            <textarea defaultValue={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} />
            <div className="options-meal">
                <a onClick={() => this.props.onNewMeal(this.props.id)}><i className="fas fa-random"></i></a>
                <a onClick={() => this.props.onFindMeal(this.props.id)}><i className="fas fa-search"></i></a>
                <a onClick={() => this.props.onLikeMeal(this.props.id)}><i className="fas fa-heart"></i></a>
                <a onClick={() => this.props.onRemoveMeal(this.props.id, this.props.status)}><i className="fas fa-times"></i></a>
                <a onClick={() => this.props.onAvoidMeal(this.props.id)}><i className="fas fa-ban"></i></a>
            </div>
        </div>
        )
    }
}

export default Meal