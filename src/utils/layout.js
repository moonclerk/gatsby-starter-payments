/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "@utils/theme"
import Navigation from "@organisms/navigation"
import Footer from "@organisms/footer"
import "./variables.css"

const GlobalStyle = createGlobalStyle`
 @media (min-width: 480px) {
  html {
    font-size: 90%; 
  }
}
@media (min-width: 600px) {
  html {
    font-size: 100%; 
  }
}
@media (min-width: 800px) {
  html {
    font-size: 125%;
  }
}
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
