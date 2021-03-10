import React from 'react'

const Link = props => {

	const {
		href = '',
		rel,
		target,
		children
	} = props

	return (
		<a href={ href } target={ target } className='link'>{ children }</a>
	)
}

export default Link
