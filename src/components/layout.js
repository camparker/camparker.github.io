import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './header'
import Footer from './footer'
// Global CSS
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline/>
      <div className="content">
        <Header siteTitle={data.site.siteMetadata.title} />
        <h1>After Header</h1>
        <main>{children}</main>
        <h1>After Main</h1>
        <Footer className="footer" text="Hello I'm a Footer"></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
