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
		project1: file(relativePath: { eq: "web.jpg" }) {
			childImageSharp {
				fixed(width: 96, height: 96) {
					...GatsbyImageSharpFixed
				}
			}
		}
		project2: file(relativePath: { eq: "p2p.png" }) {
			childImageSharp {
				fixed(width: 96, height: 96) {
					...GatsbyImageSharpFixed
				}
			}
		}
		project3: file(relativePath: { eq: "word.jpg" }) {
			childImageSharp {
				fixed(width: 96, height: 96) {
					...GatsbyImageSharpFixed
				}
			}
		}
		project4: file(relativePath: { eq: "temp.jpg" }) {
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
							title="TOUR - where will we go?"
							subtitle="10th week omnistack"
							link="https://github.com/TiagoOlivv/TOUR-where-will-we-go-WEB"
							tags={['NodeJS', 'ReactJS', 'React Native']}
							image={
								<Img
									fixed={data.project1.childImageSharp.fixed}
									alt="TOUR - where will we go?"
								/>
							}
						/>
						<Card
							title="Prototype Network P2P"
							subtitle="Download and Upload files"
							link="https://github.com/TiagoOlivv/prototype-network-p2p"
							tags={['Python']}
							image={
								<Img
									fixed={data.project2.childImageSharp.fixed}
									alt="Prototype Network P2P"
								/>
							}
						/>
						<Card
							title="REST in SD with middleware"
							subtitle="Word processing software"
							link="https://github.com/TiagoOlivv/middleware-with-communication-rest"
							tags={['Python', 'Java']}
							image={
								<Img
									fixed={data.project3.childImageSharp.fixed}
									alt="REST in SD with middleware"
								/>
							}
						/>
						<Card
							title="Ambient temperature with dht11"
							subtitle="Raspberry pub and android sub"
							link="https://github.com/TiagoOlivv/ambient-temperature-with-dht11-broker-and-Android-APP"
							tags={['Python', 'Java']}
							image={
								<Img
									fixed={data.project4.childImageSharp.fixed}
									alt="Ambient temperature with dht11"
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
