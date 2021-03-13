import React, {Component} from 'react'
import Button from '../atoms/Button'

//State component. Use this class for state components
class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    setAdd() {
        this.setState({
            count: this.state.count + 1
        })

    }

    setMinus() {
        this.setState({
            count: this.state.count - 1
        })

    }

    render() {
        return (
            <>
                <p>This number changes to {this.state.count} when button's clicked</p>
                <Button onClick={() => this.setAdd()}>Add</Button>
                <Button onClick={() => this.setMinus()}>Minus</Button>
            </>
        )
    }

}

export default Counter