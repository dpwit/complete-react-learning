import React from 'react'
import {render} from 'react-dom'
import Button from './Button'
import Link from './Link'

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
		</>
	)
}

render(
	<App />,
	document.getElementById('app')
)
