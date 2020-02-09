import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

const NotFoundPage = () => (
	<Layout>
		<SEO pageTitle="404: Not found" />
		<section className="section is-size-4-desktop is-size-5-touch">
			<h1 className="title has-text-centered">404: NOT FOUND</h1>
			<hr />
			<p className="has-text-centered">
				You just hit a route that doesn't exist... the sadness.
			</p>
		</section>
	</Layout>
)

export default NotFoundPage
