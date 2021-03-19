import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <h1>Home</h1>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </>
    )
}

export default Home