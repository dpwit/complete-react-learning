import React from "react"
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

const Formfield = props => {
    return (
        <>
            <Label for="firstName">First Name</Label>
            <Input type="text" name="firstName" />
            <Label for="lastName">Last Name</Label>
            <Input type="text" name="lastName" />
            <Button>Submit</Button>
        </>

    )
}

export default Formfield