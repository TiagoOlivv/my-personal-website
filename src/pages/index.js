import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faInstagram,
	faGithub,
	faTelegram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
	return (
		<Layout>
			<SEO
				description="front-end developer, developing apps"
				keywords="ReactJS, React Native, Node, Gatsby, Front-end, API"
			/>
			<div className="has-text-centered">
				<h1 className="title">Tiago Oliveira</h1>
				<h2 className="subtitle">Front-end Developer</h2>
				<a href="https://instagram.com/tiagoolivv" aria-label="instagram">
					<span className="icon is-large fa-2x">
						<FontAwesomeIcon icon={faInstagram} />
					</span>
				</a>
				<a href="https://github.com/tiagoolivv" aria-label="github">
					<span className="icon is-large fa-2x">
						<FontAwesomeIcon icon={faGithub} />
					</span>
				</a>
				<a href="https://t.me/tiagoolivv" aria-label="telegram">
					<span className="icon is-large fa-2x">
						<FontAwesomeIcon icon={faTelegram} />
					</span>
				</a>
				<a href="https://www.linkedin.com/in/tiagoolivv" aria-label="linkedin">
					<span className="icon is-large fa-2x">
						<FontAwesomeIcon icon={faLinkedin} />
					</span>
				</a>
			</div>
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
