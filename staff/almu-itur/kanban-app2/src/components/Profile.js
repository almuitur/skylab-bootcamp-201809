import React, { Component } from 'react'
import { Button, Input } from "mdbreact"

class Profile extends Component {
    state = { name: '', surname: '', username: '', newPassword: '', password: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handleNewPasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, surname, username, newPassword, password } = this.state

        this.props.updateProfile(name, surname, username, newPassword, password)
    }

    render() {
        return <div className="profile-container">
            <div className="profile-header"></div>
            <div className="profile-photo"></div>
            <div className="profile-form-container">
                <div className="profile-form-subcontainer-left">
                    <p className="profile-form-subcontainer-left-title">Edit Profile</p>
                </div>
                <div className="profile-form-subcontainer-center">
                    <ul>
                        <li className="profile-form-subcontainer-center-font">Name</li>
                        <li className="profile-form-subcontainer-center-font">Surname</li>
                        <li className="profile-form-subcontainer-center-font">Username</li>
                        <li className="profile-form-subcontainer-center-font">Old Password</li>
                        <li className="profile-form-subcontainer-center-font">New Password</li>
                        <li className="profile-form-subcontainer-center-font">Confirm New Password</li>
                        
                    </ul>
                </div>
                <div className="profile-form-subcontainer-right">
                    <form className="profile-form" onSubmit={this.handleSubmit}>
                        <Input className="profile-form-input" type="text" onChange={this.handleNameChange} />
                        <Input type="text" onChange={this.handleSurnameChange} />
                        <Input type="text" onChange={this.handleUsernameChange} />
                        <Input type="password" onChange={this.handleNewPasswordChange} />
                        <Input type="password" onChange={this.handlePasswordChange} />
                        <Input type="password" onChange={this.handleConfirmPasswordChange} />
                        <Button type="submit">Confirm</Button>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default Profile