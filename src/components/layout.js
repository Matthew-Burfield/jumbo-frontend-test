/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import Header from './header'

const Layout = ({ children, showHeader }) => {
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
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingTop: 0,
        backgroundColor: '#081b23',
      }}
    >
      <Global
        styles={css`
          body {
            margin: 0;
          }
          h1,
          h2 {
            color: #e3f4fc;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
          }
        `}
      />
      {showHeader && <Header siteTitle={data.site.siteMetadata.title} />}
      <main>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  showHeader: false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
}

export default Layout
