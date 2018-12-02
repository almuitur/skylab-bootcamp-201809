import React, { Component } from 'react'
import { Input } from 'mdbreact'
import './AddNewMeal.css'

class AddNewMeal extends Component {

    state = { name: '', diet: '', mainIngredients: [], optionalIngredients: [], intolerances: [], linkRecipe: '', linkImage: '', season: '', mainIngredient:'', optionalIngredient: '' }

    handleNameChange = event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleDietChange = event => {
        const diet = event.target.value
        this.setState({ diet })
    }

    handleMainIngredientChange = event => {
        const ingredient = event.target.value
        this.setState({ mainIngredient: ingredient})
    }

    handleAddMainIngredient = event => {
        event.preventDefault()
        const ingredient = this.state.mainIngredient
        const arrayIngredients = this.state.mainIngredients
        arrayIngredients.push(ingredient)
        
        this.setState({ mainIngredients: arrayIngredients })
    }

    handleRemoveMainIngredient = event => {
        event.preventDefault()
        debugger
        const ingredient = event.target.value
        const mainIngredients = this.state.mainIngredients
        mainIngredients.filter(_ingredient => _ingredient!==ingredient)

        this.setState({ mainIngredients })
    }

    handleOptionalIngredientChange = event => {
        const ingredient = event.target.value
        this.setState({ optionalIngredient: ingredient })
    }
    handleAddOptionalIngredient = event => {
        event.preventDefault()
        debugger
        const ingredient = this.state.optionalIngredient
        const arrayIngredients = this.state.optionalIngredients
        arrayIngredients.push(ingredient)
        
        this.setState({ optionalIngredients: arrayIngredients })
    }

    handleRemoveOptionalIngredient = event => {
        event.preventDefault()
        const optionalIngredients = event.target.value
    }

    handleIntolerancesChange = event => {
        const intoleranceUser = event.target.value
        const checked = event.target.checked

        if (checked) {
            let intolerances = this.state.intolerances
            intolerances.push(intoleranceUser)

            this.setState({ intolerances })
        }
        else {
            let intolerances = this.state.intolerances
            const index = intolerances.findIndex(item => item === intoleranceUser)
            intolerances.splice(index, 1)
            this.setState({ intolerances })
        }
    }

    handleLinkRecipeChange = event => {
        const linkRecipe = event.target.value
        this.setState({ linkRecipe })
    }

    handleLinkImageChange = event => {
        const linkImage = event.target.value
        this.setState({ linkImage })
    }
    handleSeasonChange = event => {
        const season = event.target.value
        this.setState({ season })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, season } = this.state
        this.props.onAddNewMeal(name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, season)
    }

    render() {

        return <div className='add-new-meal-container'>
            <h1>Add a Meal</h1>
            <form onSubmit={this.handleSubmit} >
                <div className="add-new-meal-name">
                    <h2 className='add-new-meal-title'>Name your meal:</h2>
                    <input className="add-new-meal-name-input" type="text" onChange={this.handleNameChange}></input>
                </div>

                <h2 className='add-new-meal-title'>Choose the type of diet it belongs to:</h2>
                <div className='add-new-meal-option'>
                    <label for='vegan'>
                        <input type='radio' name='diet' id='vegan' value='vegan' onChange={this.handleDietChange} />
                        <div className='add-meal-image-container'><img className={(this.state.diet === 'vegan') ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/vegan.png')} alt='vegan' /></div>
                    </label>
                    <label for='vegetarian'>
                        <input type='radio' name='diet' id='vegetarian' value='vegetarian' onChange={this.handleDietChange} />
                        <div className='add-meal-image-container'><img className={(this.state.diet === 'vegetarian') ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/vegetarian.png')} alt='vegetarian' /></div>
                    </label>
                    <label for='pescatarian'>
                        <input type='radio' name='diet' id='pescatarian' value='pescatarian' onChange={this.handleDietChange} />
                        <div className='add-meal-image-container'><img className={(this.state.diet === 'pescatarian') ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/pescatarian.png')} alt='pescatarian' /></div>
                    </label>
                    <label for='flexitarian'>
                        <input type='radio' name='diet' id='flexitarian' value='flexitarian' onChange={this.handleDietChange} />
                        <div className='add-meal-image-container'><img className={(this.state.diet === 'flexitarian') ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/flexitarian.png')} alt='flexitarian' /></div>
                    </label>
                </div>

                <div className="add-new-meal-ingredients-container">
                    <div className="add-new-meal-ingredients-container-left">
                        <h2 className='add-new-meal-title'>Add the main ingredients of your recipe</h2>
                        <p>(those without whom the meal would not make sense...):</p>
                        <div className="add-new-meal-form"><Input onChange={this.handleMainIngredientChange}/>
                            <button id="button-add" type="submit" onClick={this.handleAddMainIngredient}><i className="fas fa-plus"></i></button>
                        </div>

                        <div className="ingredients-container">
                            {this.state.mainIngredients && this.state.mainIngredients.map(ingredient => <p className="ingredient">{ingredient}<a onClick={this.handleRemoveMainIngredient}><i className="fas fa-times"></i></a></p>)}
                        </div>
                    </div>
                    <div className="add-new-meal-ingredients-container-right">
                        <h2 className='add-new-meal-title'>Add the optional ingredients of your recipe</h2>
                        <p>(those avoidable in case of intolerances or allergies...):</p>
                        <div className="add-new-meal-form"><Input onChange={this.handleOptionalIngredientChange}/>
                            <button id="button-add" type="submit" onClick={this.handleAddOptionalIngredient}><i className="fas fa-plus"></i></button>
                        </div>
                        <div className="ingredients-container">
                            {this.state.optionalIngredients && this.state.optionalIngredients.map(ingredient => <p className="ingredient">{ingredient}<a onClick={this.handleRemoveOptionalIngredient}><i className="fas fa-times"></i></a></p>)}
                        </div>
                    </div>
                </div>

                <h2 className='add-new-meal-title'>Select intolerance:</h2>
                <div className='add-new-meal-option'>
                    <label for='lactose'>
                        <input type='checkbox' name='intolerances' id='lactose' value='lactose' onChange={this.handleIntolerancesChange} />
                        <div className='add-meal-image-container'><img className={(this.state.intolerances.includes('lactose')) ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/lactose.png')} alt='lactose' /></div>
                    </label>
                    <label for='gluten'>
                        <input type='checkbox' name='intolerances' id='gluten' value='gluten' onChange={this.handleIntolerancesChange} />
                        <div className='add-meal-image-container'><img className={(this.state.intolerances.includes('gluten')) ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/gluten.png')} alt='gluten' /></div>
                    </label>
                </div>

                <div className="add-new-meal-name">
                    <h2 className='add-new-meal-title'>Add a link to the recipe of your meal:</h2>
                    <input className="add-new-meal-name-input" type="text" onChange={this.handlehandleLinkRecipeChange}></input>
                </div>

                <div className="add-new-meal-name">
                    <h2 className='add-new-meal-title'>Add a link to the image of the meal</h2>
                    <input className="add-new-meal-name-input" type="text" onChange={this.handleLinkImageChange}></input>
                </div>

                <h2 className='add-new-meal-title'>Select which seasons you can eat this meal:</h2>
                <div className='add-new-meal-option'>
                    <label for='winter'>
                        <input type='checkbox' name='seasons' id='winter' value='winter' onChange={this.handleSeasonChange} />
                        <div className='add-meal-image-container'><img className={(this.state.season.includes('winter')) ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/winter.jpg')} alt='winter' /></div>
                    </label>
                    <label for='spring'>
                        <input type='checkbox' name='seasons' id='spring' value='spring' onChange={this.handleSeasonChange} />
                        <div className='add-meal-image-container'><img className={(this.state.season.includes('spring')) ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/spring.jpg')} alt='spring' /></div>
                    </label>
                    <label for='summer'>
                        <input type='checkbox' name='seasons' id='summer' value='summer' onChange={this.handleSeasonChange} />
                        <div className='add-meal-image-container'><img className={(this.state.season.includes('summer')) ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/summer.png')} alt='summer' /></div>
                    </label>
                    <label for='autum'>
                        <input type='checkbox' name='seasons' id='autum' value='autum' onChange={this.handleSeasonChange} />
                        <div className='add-meal-image-container'><img className={(this.state.season.includes('autum')) ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/autum.jpg')} alt='autum' /></div>
                    </label>
                </div>

                <div className='add-new-meal-button-container'><button className='home-create-button' type='submit'>ADD MEAL</button></div>
            </form>
        </div>
    }
}

export default AddNewMeal