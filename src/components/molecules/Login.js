import React, {Component} from 'react'
import Button from '../atoms/Button'

const LoginButton = (props) => {

    return (
        <Button onClick={ props.onClick }>Please log in</Button>
    )
}

const LogoutButton = (props) => {

    return (
        <Button onClick={ props.onClick }>Please log out</Button>
    )
}

//State component. Use this class to change the state of the component
class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = { isLoggedIn: false}

    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <>
                {button}
            </>
        )
    }

}

export default Login