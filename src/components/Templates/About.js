import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../molecules/counter/Counter'

const About = () => {

    return (
        <>
            <h1>About</h1>
            <Link to='/'>Home</Link>
            <Counter />
        </>
    )
}

export default About