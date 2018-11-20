import React, { Component } from 'react'
import Landing from './components/Landing/Landing'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MyMeals from './components/MyMeals/MyMeals'
import Settings from './components/Settings/Settings'
import NavbarLogged from './components/NavbarLogged'
import FooterPage from './components/FooterPage'
import MealPlan from './components/MealPlan/MealPlan'
// import CustomPlan from './components/CustomPlan'
import Error from './components/Error'
import logic from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import AlertPage from './components/AlertPage'

logic.url = 'http://localhost:5000/api'

class App extends Component {
    state = { error: null, alert: null }

    handleRegisterClick = (event) => {
        event.preventDefault()
        this.props.history.push('/register')
    }

    handleLoginClick = (event) => {
        event.preventDefault()
        this.props.history.push('/login')
    }

    handleRegister = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/login'))
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLogin = (username, password) => {
        try {
            logic.login(username, password)
                .then(() =>  this.props.history.push('/home'))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
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
        logic.updateUser(name, surname, username, newPassword, password, confirmNewPassword)
        //alert
        // this.props.history.push('/home')
    }

    render() {
        const { error } = this.state

        return <div>
            {error && <Error message={error} />}
            {logic.loggedIn && <NavbarLogged  onHomeClick={this.handleHomeClick} onMealsPlanClick={this.handleMealsPlanClick} onLogoutClick={this.handleLogoutClick} onMyMealsClick={this.handleMyMealsClick} onSettingsClick={this.handleSettingsClick} />}
            <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/home" />} />
            <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onLoginClick={this.handleLoginClick} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />
            <Route path="/login" render={() => !logic.loggedIn ?  <Login onLogin={this.handleLogin} onRegisterClick={this.handleRegisterClick} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />
            <Route path="/mymeals" render={() => logic.loggedIn ? <MyMeals /> : <Redirect to="/" /> } />
            <Route path="/home" render={() => logic.loggedIn ? <Home /> : <Redirect to="/" />} />

            {/* <Route path="/customplan" render={() => logic.loggedIn ? <div> 
                <div className="logout-button-section"><a className="logout-button" onClick={this.handleLogoutClick}>Logout</a></div>
                <CustomPlan />
            </div> : <Redirect to="/" />} /> */}
            
            <Route path="/mealplan" render={() => logic.loggedIn ? <MealPlan /> : <Redirect to="/" />} />
            <Route path="/settings" render={() => <Settings onUpdateProfileClick={this.handleUpdateProfile} /> } />
            {logic.loggedIn && <FooterPage />}

        </div>
    }
}

export default withRouter(App)
