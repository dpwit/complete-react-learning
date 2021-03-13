import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from './components/atoms/Button'
import Link from './components/atoms/Link'
import Input from './components/atoms/Input'
import Label from './components/atoms/Label'
import Formfield from './components/molecules/Formfield'
import Counter from './components/molecules/Counter'

function showAlert() {
	alert("Hello");
}

function secondAlert() {
	alert("Hello Again!");
}

//ES6 javascript functional component
const ES6FunctionalComponent = (props) => {
	return (
		<h1>{ props.name } ES6 functional component</h1>
	)
}

//ES5 javascript function component
function ES5FunctionalComponent(props) {
	return (
		<h1>{ props.name } ES5 functional component</h1>
	)
}

//class component
class ClassComponent extends Component {
	render() {
		const { value } = this.props;
		return <h1>{ value } React.js class component</h1>
	}
}

//ES5 functional component
function Welcome(props) {
	return (
		<h1 className='heading'>Hello {props.name} !</h1>
	)
}

function App() {
	return (
		<>
			<ES6FunctionalComponent name="Example1" />
			<ES5FunctionalComponent name="Example2" />
			<ClassComponent value="Example3" />
			<ClassComponent value="Example4" />
			<Welcome name="Darren" />
			<Link href="https://www.google.com" target="_blank">Google</Link>
			<Welcome name="Dan" />
			<Link href="https://www.bbc.com">BBC</Link>
			<Welcome name="Dave" />
			<Link>YouTube</Link>
			<Welcome name="Scott" />
			<Link>Bing</Link>
			<Button onClick={showAlert}>Click me</Button>
			<Button onClick={secondAlert}>Show Alert</Button>
			<Label for="firstName">First Name</Label>
			<Input type="text" name="firstName" />
			<Label for="lastName">Last Name</Label>
			<Input type="text" name="lastName" />
			<h1>Molecule form field</h1>
			<Formfield />
			<Counter />
		</>
	)
}

render(
	<App />,
	document.getElementById('app')
)
