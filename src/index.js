import React from 'react';
import {render} from 'react-dom';

function Link({ href='', target, children }) {
	return (
		<a href={ href } target={ target } className='link'>{ children }</a>
	)
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
		</>
	)
}

render(
	<App />,
	document.getElementById('app')
)


