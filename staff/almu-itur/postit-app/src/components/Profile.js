import React, { Component } from 'react'

class Profile extends Component {

    state = { }
    // state = { text: this.props.text }

    updateProfile = event => {
        const text = event.target.value

        // this.setState({ text })
    }

    render() {
        return <article className="profile">
            <form>
                <button>HOME</button>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Surname"></input>

                <input type="text" placeholder="New Password"></input>
                <input type="text" placeholder="Repeat Password"></input>

                <button onClick={()=> this.updateProfile}>UPDATE PROFILE</button>
            </form>
        </article>
    }
}

export default Profile