import React from 'react'

const Link = props => {

	const {
		href = '',
		rel,
		target,
		children
	} = props

	// return a link in standard format
	// return (
	//	<a href={ href } target={ target } className='link'>{ children }</a>
	//)

	// return a link with the spread operator
	return(
		<a { ... { href, rel, target } } className='link'>{ children }</a>
	)
}

export default Link
