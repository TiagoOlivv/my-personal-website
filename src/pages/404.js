import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Title from 'components/Title'

const NotFoundPage = () => (
	<Layout>
		<SEO pageTitle="404: Not found" />
		<section className="section is-size-4-desktop is-size-5-touch">
			<Title>404: NOT FOUND</Title>
			<p className="has-text-centered">
				You just hit a route that doesn't exist... the sadness.
				<span role="img" aria-label="confused">
					😕
				</span>
			</p>
		</section>
	</Layout>
)

export default NotFoundPage
