import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <SEO title="About" />
      <Link to="/">Go to index</Link>
    </Layout>
)

export default IndexPage
