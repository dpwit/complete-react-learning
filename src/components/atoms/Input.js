import React from "react"

const Input = props => {

    const {
        type,
        name,
        value
    } = props

    return (
        <input { ... { type, name, value } } />

    )
}

export default Input