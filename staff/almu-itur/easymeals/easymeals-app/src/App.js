import React, { Component } from 'react'
import Error from './components/Error/Error'
// import Success from './components/Success/Success'
import Landing from './components/Landing/Landing'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import NavbarLogged from './components/NavbarLogged'
import FooterPage from './components/FooterPage'
import MealPlan from './components/MealPlan/MealPlan'
import MyMeals from './components/MyMeals/MyMeals'
import Settings from './components/Settings/Settings'
// import CustomPlan from './components/CustomPlan/CustomPlan'
import logic from './logic'
import swal from 'sweetalert'
import { Route, withRouter, Redirect } from 'react-router-dom'

logic.url = 'http://localhost:5000/api'

class App extends Component {
    state = {}

    handleRegisterClick = event => {
        event.preventDefault()
        this.props.history.push('/register')
    }

    handleLoginClick = event => {
        event.preventDefault()
        this.props.history.push('/login')
    }

    handleRegister = (name, surname, username, password, repeatPassword) => {
        debugger
        // try {
            logic.registerUser(name, surname, username, password, repeatPassword)
                .then(() => {
                    swal("User successfully registered!")
                    this.props.history.push('/login')
                })
                .catch(err => Error(err))
        // } catch (err) { Error(err) }
    }

    handleLogin = (username, password) => {
        try {
            logic.login(username, password)
                .then(() => { this.props.history.push('/home') })
                .catch(err => Error(err))
        } catch (err) { Error(err) }
    }

    handleLogoutClick = () => {
        logic.logout()
        this.props.history.push('/')
    }

    handleGoBack = () => this.props.history.push('/')

    handleMyMealsClick = event => {
        event.preventDefault()
        this.props.history.push('/mymeals')
    }

    handleSettingsClick = event => {
        event.preventDefault()
        this.props.history.push('/settings')
    }

    handleMealsPlanClick = event => {
        event.preventDefault()
        this.props.history.push('/mealplan')
    }

    handleHomeClick = event => {
        event.preventDefault()
        this.props.history.push('/home')
    }

    handleUpdateProfile = (name, surname, username, newPassword, password, confirmNewPassword) => {
        try {
            logic.updateUser(name, surname, username, newPassword, password, confirmNewPassword)
                .then(() => { 
                    swal("User updated registered!")
                    this.props.history.push('/home') })
                .catch(err => Error(err))
        } catch (err) { Error(err) }
    }

    handleCreateMealPlan = (diet, plan, intolerances) => {
        
        try {
            logic.createMealPlan(diet, plan, intolerances)
                .then(() => {
                    this.props.history.push('/mealplan')
                })
                .catch(err => Error(err))
        } catch (err) { Error(err) }
    }

    render() {

        return <div>

            {logic.loggedIn && <NavbarLogged onHomeClick={this.handleHomeClick} onMealsPlanClick={this.handleMealsPlanClick} onLogoutClick={this.handleLogoutClick} onMyMealsClick={this.handleMyMealsClick} onSettingsClick={this.handleSettingsClick} />}

            <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/home" />} />
            <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onLoginClick={this.handleLoginClick} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />
            <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onRegisterClick={this.handleRegisterClick} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />
            <Route path="/mymeals" render={() => logic.loggedIn ? <MyMeals /> : <Redirect to="/" />} />
            <Route path="/home" render={() => logic.loggedIn ? <Home onCreateMealPlan={this.handleCreateMealPlan} /> : <Redirect to="/" />} />

            {/* <Route path="/customplan" render={() => logic.loggedIn ? <div> 
                <div className="logout-button-section"><a className="logout-button" onClick={this.handleLogoutClick}>Logout</a></div>
                <CustomPlan />
            </div> : <Redirect to="/" />} /> */}

            <Route path="/mealplan" render={() => logic.loggedIn ? <MealPlan /> : <Redirect to="/" />} />
            <Route path="/settings" render={() => <Settings onUpdateProfileClick={this.handleUpdateProfile} />} />
            {logic.loggedIn && <FooterPage />}


        </div>
    }
}

export default withRouter(App)
