import React, { Component } from 'react'
import { Input } from 'mdbreact'
import Ingredient from '../Ingredient/Ingredient'
import Error from '../Error/Error'
import './AddNewMeal.css'

class AddNewMeal extends Component {

    state = { name: '', diet: '', category: '', subcategory: '', mainIngredients: [], optionalIngredients: [], isSpecialMeal: '', isColdDish: '', intolerances: [], isLight: '', season: [], recipelink: '', mainIngredient: '', optionalIngredient: '' }

    handleNameChange = event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleDietChange = event => {
        const diet = event.target.value
        this.setState({ diet })
    }

    handleCategoryChange = event => {
        const category = event.target.value
        this.setState({ category })
    }

    handleSubcategoryChange = event => {
        const subcategory = event.target.value
        this.setState({ subcategory })
    }

    handleMainIngredientChange = event => {
        const ingredient = event.target.value
        this.setState({ mainIngredient: ingredient })
    }

    handleAddMainIngredient = event => {
        event.preventDefault()

        if (!this.state.mainIngredient) throw Error('You need to name a main ingredient first')

        const ingredient = this.state.mainIngredient
        const arrayIngredients = this.state.mainIngredients

        arrayIngredients.push(ingredient)

        this.setState({ mainIngredients: arrayIngredients })
    }

    handleRemoveMainIngredient = ingredient => {
        if (!ingredient) throw Error('There are no ingredients to remove')

        let mainIngredients = this.state.mainIngredients

        mainIngredients = mainIngredients.filter(_ingredient => _ingredient !== ingredient)

        this.setState({ mainIngredients })
    }

    handleOptionalIngredientChange = event => {
        const ingredient = event.target.value

        this.setState({ optionalIngredient: ingredient })
    }
    handleAddOptionalIngredient = event => {
        event.preventDefault()

        if (!this.state.optionalIngredient) throw Error('You need to name an optional ingredient first')

        const ingredient = this.state.optionalIngredient
        const arrayIngredients = this.state.optionalIngredients

        arrayIngredients.push(ingredient)

        this.setState({ optionalIngredients: arrayIngredients })
    }

    handleRemoveOptionalIngredient = ingredient => {
        if (!ingredient) throw Error('There are no ingredients to remove')

        let optionalIngredients = this.state.optionalIngredients

        optionalIngredients = optionalIngredients.filter(_ingredient => _ingredient !== ingredient)

        this.setState({ optionalIngredients })
    }

    handleIsSpecialMealChange = event => {
        const isSpecialMeal = event.target.value
        this.setState({ isSpecialMeal })
    }

    handleIsColdChange = event => {
        const isCold = event.target.value
        this.setState({ isCold })
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

    handleIsLightChange = event => {
        const isLight = event.target.value
        this.setState({ isLight })
    }

    handleSeasonChange = event => {
        const season = event.target.value
        const checked = event.target.checked

        if (checked) {
            let seasons = this.state.seasons
            seasons.push(season)

            this.setState({ seasons })
        }
        else {
            let seasons = this.state.seasons
            const index = seasons.findIndex(item => item === season)
            seasons.splice(index, 1)

            this.setState({ seasons })
        }
    }

    handleLinkRecipeChange = event => {
        const linkRecipe = event.target.value
        this.setState({ linkRecipe })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, seasons } = this.state

        this.props.onAddNewMeal(name, diet, mainIngredients, optionalIngredients, intolerances, linkRecipe, linkImage, seasons)
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
                        <div className='add-meal-image-container'><img className={(this.state.diet === '0') ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/vegan.png')} alt='vegan' /></div>
                    </label>
                    <label for='vegetarian'>
                        <input type='radio' name='diet' id='vegetarian' value='vegetarian' onChange={this.handleDietChange} />
                        <div className='add-meal-image-container'><img className={(this.state.diet === '1') ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/vegetarian.png')} alt='vegetarian' /></div>
                    </label>
                    <label for='pescatarian'>
                        <input type='radio' name='diet' id='pescatarian' value='pescatarian' onChange={this.handleDietChange} />
                        <div className='add-meal-image-container'><img className={(this.state.diet === '2') ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/pescatarian.png')} alt='pescatarian' /></div>
                    </label>
                    <label for='flexitarian'>
                        <input type='radio' name='diet' id='flexitarian' value='flexitarian' onChange={this.handleDietChange} />
                        <div className='add-meal-image-container'><img className={(this.state.diet === '3') ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/flexitarian.png')} alt='flexitarian' /></div>
                    </label>
                </div>

                <div className="add-new-meal-ingredients-container">
                    <div className="add-new-meal-ingredients-container-left">
                        <h2 className='add-new-meal-title'>Add the main ingredients of your recipe</h2>
                        <p>(those without whom the meal would not make sense...):</p>
                        <div className="add-new-meal-form"><Input onChange={this.handleMainIngredientChange} />
                            <button id="button-add" type="submit" onClick={this.handleAddMainIngredient}><i className="fas fa-plus"></i></button>
                        </div>
                        <div className="add-new-meal-ingredients-container">
                            {this.state.mainIngredients && this.state.mainIngredients.map(ingredient => <Ingredient key={ingredient} name={ingredient} onRemoveIngredient={this.handleRemoveMainIngredient} />)}
                        </div>
                    </div>
                    <div className="add-new-meal-ingredients-container-right">
                        <h2 className='add-new-meal-title'>Add the optional ingredients of your recipe</h2>
                        <p>(those avoidable in case of intolerances or allergies...):</p>
                        <div className="add-new-meal-form"><Input onChange={this.handleOptionalIngredientChange} />
                            <button id="button-add" type="submit" onClick={this.handleAddOptionalIngredient}><i className="fas fa-plus"></i></button>
                        </div>
                        <div className="add-new-meal-ingredients-container">
                            {this.state.optionalIngredients && this.state.optionalIngredients.map(ingredient => <Ingredient key={ingredient} name={ingredient} onRemoveIngredient={this.handleRemoveOptionalIngredient} />)}
                        </div>
                    </div>
                </div>

                <div className="add-new-meal-name">
                    <h2 className='add-new-meal-title'>Is this meal suitable for special occasions?</h2>
                    <input type='radio' name='isSpecialMeal' id='isSpecialMeal' value='true' onChange={this.handleIsSpecialMealChange} />
                    <input type='radio' name='isSpecialMeal' id='isSpecialMeal' value='false' onChange={this.handleIsSpecialMealChange} />
                </div>

                <h2 className='add-new-meal-title'>Select intolerance of the meal:</h2>
                <p className='add-new-meal-subtitle'>(based on its main ingredients only...):</p>
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
                        <div className='add-meal-image-container'><img className={(this.state.season.includes('autum')) ? 'select-option-img-active' : 'select-option-img'} src={require('../../images/autum.png')} alt='autum' /></div>
                    </label>
                </div>

                <div className='add-new-meal-button-container'><button className='home-create-button' type='submit'>ADD MEAL</button></div>
            </form>
        </div>
    }
}

export default AddNewMeal