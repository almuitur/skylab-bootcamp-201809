import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem } from 'mdbreact'

class NavbarLoggin extends Component {

    state = {
        collapse: false,
        isWideEnough: false,
    }

    onClickNav = () => this.setState({ collapse: !this.state.collapse })

    render() {
        return (
            <Navbar color="pink darken-4" dark expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>Kanban-app</strong>
                </NavbarBrand>

                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClickNav} />}
                <NavbarNav right>
                    <NavItem>
                        <a className="nav-link waves-effect waves-light" onClick={this.props.onProfileClick}>Profile</a>
                    </NavItem>
                    <NavItem>
                        <a className="nav-link waves-effect waves-light" onClick={this.props.onLogout}>Logout</a>
                    </NavItem>
                </NavbarNav>
            </Navbar>
        )
    }
}

export default NavbarLoggin
