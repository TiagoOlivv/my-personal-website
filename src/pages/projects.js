import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
	return (
		<Layout>
			<SEO
				pageTitle="Projects"
				description="front-end developer, developing apps"
				keywords="ReactJS, React Native, Node, Gatsby, Front-end, API"
			/>
			<section className="section is-size-4-desktop is-size-5-touch">
				<h1 className="title has-text-centered">Projects</h1>
				<hr />
				<p className="has-text-centered">
					{`Some of my projects, see more on my `}
					<a href="https://github.com/tiagoolivv">Github</a>
				</p>
				<ul className="has-text-centered">
					<li>
						<a href="">Projeto 1</a>
					</li>
					<li>
						<a href="">Projeto 2</a>
					</li>
					<li>
						<a href="">Projeto 3</a>
					</li>
				</ul>
			</section>
		</Layout>
	)
}
