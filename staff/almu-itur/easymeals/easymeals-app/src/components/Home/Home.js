import React, { Component } from 'react'
import './Home.css' 

class Home extends Component {

    state = { diet: '', plan: '', intolerances: [] }

    handleDietChange = event => {
        const diet = event.target.value

        this.setState({ diet })
    }

    handlePlanChange = event => {

        const plan = event.target.value

        this.setState({ plan })
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

    handleSubmit = event => {
        event.preventDefault()

        const { diet, plan, intolerances } = this.state

        this.props.onCreateMealPlan(diet, plan, intolerances)
    }

    render() {

        return <div className='home'>

               <form onSubmit={this.handleSubmit} >
                    <h3 className='home-title'>Choose a diet</h3>
                    <div className='selectDiet'>
                        <label for='vegan'>
                            <input type='radio' name='diet' id='vegan' value='vegan' onChange={this.handleDietChange} />
                            <img className='selectDiet-img' src={require('../../images/vegan.png')} alt='vegan' />
                        </label>
                        <label for='vegetarian'>
                            <input type='radio' name='diet' id='vegetarian' value='vegetarian' onChange={this.handleDietChange} />
                            <img className='selectDiet-img' src={require('../../images/vegetarian.png')} alt='vegetarian' />
                        </label>
                        <label for='pescatarian'>
                            <input type='radio' name='diet' id='pescatarian' value='pescatarian' onChange={this.handleDietChange} />
                            <img className='selectDiet-img' src={require('../../images/pescatarian.png')} alt='pescatarian' />
                        </label>
                        <label for='flexible'>
                            <input type='radio' name='diet' id='flexitarian' value='flexitarian' onChange={this.handleDietChange} />
                            <img className='selectDiet-img' src={require('../../images/flexitarian.png')} alt='flexitarian' />
                        </label>
                    </div>

                    <h3 className='home-title'>Choose a plan</h3>
                    <div className='selectPlan'>
                        <label for='balanced'>
                            <input type='radio' name='plan' id='balanced' value='balanced' onChange={this.handlePlanChange} />
                            <img className='selectPlan-img' src={require('../../images/balanced-text-light.png')} alt='balanced-option' />
                        </label>
                        <label for='diet'>
                            <input type='radio' name='plan' id='diet' value='diet' onChange={this.handlePlanChange} />
                            <img className='selectPlan-img' src={require('../../images/diet-text-light.png')} alt='diet-option' />
                        </label>
                        <label for='custom'>
                            <input type='radio' name='plan' id='custom' value='custom' onChange={this.handlePlanChange} />
                            <img className='selectPlan-img' src={require('../../images/custom-text-light.png')} alt='custom-option' />
                        </label>
                    </div>

                    <h3 className='home-title'>Select intolerance</h3>
                    <div className='selectIntolerance'>
                        <label for='lactose'>
                            <input type='checkbox' name='intolerances' id='lactose' value='lactose' onChange={this.handleIntolerancesChange} />
                            <img className='selectIntolerance-img' src={require('../../images/lactose.png')} alt='lactose' />
                        </label>
                        <label for='gluten'>
                            <input type='checkbox' name='intolerances' id='gluten' value='gluten' onChange={this.handleIntolerancesChange} />
                            <img className='selectIntolerance-img' src={require('../../images/gluten.png')} alt='gluten' />
                        </label>
                    </div>
                    <div className='home-create-button-container'><button className='home-create-button' type='submit'>CREATE MEAL PLAN</button></div>
                </form>
            </div>
            }
        }
        
export default Home