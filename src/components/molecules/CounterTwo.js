import React, {Component} from 'react'
import Button from '../atoms/Button'

//State component. Use this class for state components
class CounterTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <>
                <p>Example2: This number increase to {this.state.count} when button's clicked</p>
                <Button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</Button>
            </>
        )
    }

}

export default CounterTwo