import React from 'react'

function GuestGreeting() {

    return (
        <h1>Please sign up</h1>
    )

}

function UserGreeting() {

    return (
        <h1>Please log in</h1>
    )

}

// functional component
const Greeting = (props) => {

    const isSignedUp = props.isSignedUp;
    if (isSignedUp) {

        return <UserGreeting />
    }

    return <GuestGreeting />

}

export default Greeting