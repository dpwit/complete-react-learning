import React, {Component} from 'react'

//State component. Use this class for state components
class Data extends Component {
    constructor() {
        super();

        this.state = {
            hits: []
        }
    }

    //lifecycle method
    componentDidMount() {
        fetch('https://hn.algolia.com/api/v1/search?query=' + 'react')
            .then(response => response.json())
            .then(data => this.setState({ hits: data.hits }))
    }

    render() {

        const { hits } = this.state

        console.log(hits)

        return (
            <ul>
                {hits.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                        <p>Written by: {hit.author}</p>
                    </li>
                )}
            </ul>
        )
    }

}

export default Data