import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

const Stack = () => {
	return (
		<Layout>
			<SEO
				pageTitle="Projects"
				description="front-end developer, developing apps"
				keywords="ReactJS, React Native, Node, Gatsby, Front-end, API"
			/>
			<Helmet>
				<script
					async
					src="https://cdn1.stackshare.io/javascripts/client-code.js"
					charset="utf-8"
				/>
			</Helmet>

			<section className="section is-size-4-desktop is-size-5-touch">
				<h1 className="title has-text-centered">Stack</h1>
				<hr />

				<div className="container has-text-centered">
					<p className="content">
						I have experience with many modern tools, select them for my
						projects depending on the usage.
					</p>
					<p className="content">Here is my stack on StackShare</p>

					<div className="columns is-centered">
						<div className="column is-half">
							<a
								frameborder="0"
								data-theme="light"
								data-layers="2,4,1,3"
								data-stack-embed="true"
								href="https://embed.stackshare.io/stacks/embed/55aad5ab7f0930560cd19cc0df7424"
							>
								StackShare
							</a>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Stack
