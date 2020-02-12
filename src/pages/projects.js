import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Card from 'components/Card'
import Title from 'components/Title'

export const queryImage = graphql`
	query {
		propject1: file(relativePath: { eq: "web.jpg" }) {
			childImageSharp {
				fixed(width: 96, height: 96) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`

const Projects = ({ data }) => {
	return (
		<Layout>
			<SEO
				pageTitle="Projects"
				description="front-end developer, developing apps"
				keywords="ReactJS, React Native, Node, Gatsby, Front-end, API"
			/>
			<section className="section is-size-4-desktop is-size-5-touch">
				<Title>Projects</Title>

				<p className="has-text-centered">
					{`Some of my projects, see more on my `}
					<a href="https://github.com/tiagoolivv">Github</a>.
				</p>

				<div className="columns is-centered">
					<div className="column is-half">
						<Card
							title="Title Project"
							subtitle="Subtitle Project"
							link="https://www.google.com"
							tags={['Gatsby', 'React']}
							image={
								<Img
									fixed={data.propject1.childImageSharp.fixed}
									alt="Title Project"
								/>
							}
						/>
					</div>
				</div>
				<p className="has-text-centered">
					{`Check out `}
					<Link to="/stack">Stack</Link>
				</p>
			</section>
		</Layout>
	)
}

Projects.propTypes = {
	data: PropTypes.object.isRequired,
}

export default Projects
