import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
	return (
		<Layout>
			<SEO
				description="front-end developer, developing apps"
				keywords="ReactJS, React Native, Node, Gatsby, Front-end, API"
			/>
			<h1 className="title has-text-centered">Tiago Oliveira</h1>
			<h2 className="subtitle has-text-centered">Front-end Developer</h2>
			<section className="section content is-size-4-desktop is-size-5-touch">
				<h4 className="title">Hello, I'm Tiago Oliveira</h4>
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
