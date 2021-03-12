import React from "react"
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

const Formfield = props => {

    const {

    } = props

    return (
        <>
            <Label for="forname">Forname</Label>
            <Input type="text" name="forname" />
            <Label for="surname">Surname</Label>
            <Input type="text" name="surname" />
            <Button>Submit</Button>
        </>

    )
}

export default Formfield