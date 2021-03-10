import React from 'react'

function Link({ href='', target, children }) {
	return (
		<a href={ href } target={ target } className='link'>{ children }</a>
	)
}

export default Link
