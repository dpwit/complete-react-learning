import React from "react"

const Label = props => {

    const {
        forLabel,
        children
    } = props

    return (
        <label htmlFor={ forLabel }>{ children }</label>
    )
}

export default Label