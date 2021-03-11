import React from 'react'
import {render} from 'react-dom'
import Button from './components/atoms/Button'
import Link from './components/atoms/Link'
import Input from './components/atoms/Input'
import Label from './components/atoms/Label'
import Formfield from './components/molecules/Formfield'

function showAlert() {
	alert("Hello");
}

function secondAlert() {
	alert("Hello Again!");
}

function Welcome(props) {
	return (
		<h1 className='heading'>Hello {props.name} !</h1>
	)
}

function App() {
	return (
		<>
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
		</>
	)
}

render(
	<App />,
	document.getElementById('app')
)
