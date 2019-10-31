import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Typography from '@material-ui/core/Typography'

import Header from "./header"
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
      <Typography>
        <Header siteTitle={data.site.siteMetadata.title} />
      </Typography>
      <h1>After Header</h1>
      <div className="content"
      >
        <main>{children}</main>
        <h1>After Main</h1>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
