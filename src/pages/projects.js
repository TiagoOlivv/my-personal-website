import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
	return (
		<Layout>
			<SEO pageTitle="Projects" />
			<h1>Projects</h1>
			<hr />
			<p>
				{`Some of my projects, see more on my `}
				<a href="https://github.com/tiagoolivv">Github</a>
			</p>
			<ul>
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
		</Layout>
	)
}
