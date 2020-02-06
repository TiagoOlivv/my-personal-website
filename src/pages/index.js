import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

export default () => {
	return (
		<Layout>
			<Helmet title="Home | Tiago Oliveira" />
			<h1>Tiago Oliveira</h1>
			<h2>Front-end Developer</h2>
			<section>
				<h4>Hello, I'm Tiago de Moura Oliveira</h4>
				<p>
					Graduating in the Information Systems course at the Federal University
					of Piaui - UFPI. Interest in developing web and mobile applications, I
					participate in technology events always looking to increase my skills,
					this helps me to stay fit to the market and be collaborative.
				</p>
				<p>
					I develop my projects with JavaScript using ReactJS, React Native and
					Node.
				</p>
			</section>
			{`Check out mostly `}
			<Link to="/projects">Projects</Link>
		</Layout>
	)
}
