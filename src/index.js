import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Templates/Home'
import About from './components/Templates/About'
import Contact from './components/Templates/Contact'


function App() {
    return (
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Contact } />
            </Switch>
    )
}

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
)
