import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Templates/Home'
import About from './components/Templates/About'
import Contact from './components/Templates/Contact'
import store from './store'

const App = () => {
    return (
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Contact } />
            </Switch>
    )
}

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)
