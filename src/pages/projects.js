import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Card from '../components/Card'

export const queryImage = graphql`
	query {
		propject1: file(relativePath: { eq: "web.jpg" }) {
			childImageSharp {
				fixed(width: 96, height: 96) {
					...GatsbyImageSharpFixed
				}
			}
		}
		propject2: file(relativePath: { eq: "avatar.jpg" }) {
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
				<Link to="/">Voltar</Link>
				<h1 className="title has-text-centered">Projects</h1>
				<hr />
				<p className="has-text-centered">
					{`Some of my projects, see more on my `}
					<a href="https://github.com/tiagoolivv">Github</a>.
				</p>

				<div className="columns">
					<div className="column is-half is-offset-one-quarter">
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
						<Card
							title="Title Project"
							subtitle="Subtitle Project"
							link="https://www.google.com"
							tags={['Gatsby', 'React']}
							image={
								<Img
									fixed={data.propject2.childImageSharp.fixed}
									alt="Title Project"
								/>
							}
						/>
					</div>
				</div>
			</section>
		</Layout>
	)
}

Projects.propTypes = {
	data: PropTypes.object.isRequired,
}

export default Projects
