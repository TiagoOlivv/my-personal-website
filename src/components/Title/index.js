import React from 'react'
import PropType from 'prop-types'

const Title = ({ children }) => {
	return (
		<>
			<h1 className="title has-text-centered has-text-light">{children}</h1>
			<hr />
		</>
	)
}

Title.protoTypes = {
	children: PropType.node.isRequired,
}

export default Title
