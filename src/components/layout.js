import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Header from './header'
import Footer from './footer'
// Roboto Font
import 'typeface-roboto';
// Global CSS
import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#adffe1',
  },
}));

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

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline/>
        <Header siteTitle={data.site.siteMetadata.title} /> 
        <Container component="main" className={classes.main} maxWidth="lg">
          <main>{children}</main>
        </Container>
        <footer className={classes.footer}>
          <Container>
            <Footer/>
          </Container>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
