/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Legacy from "../components/common/legacy"
import Footer from "../components/footer"

import TopBar from "../components/topbar"
import NavBar from "../components/navbar"

class Layout extends React.Component {

    render() {
        const {children, location} = this.props

        return (
            <StaticQuery query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
             render={data => (
                 <>

                    <TopBar />

                    <NavBar location={location} title={data.site.siteMetadata.title}/>
                    {/* END nav */}

                    {children}

                    <Footer />

                    <Legacy/>
                 </>
             )}
            />
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
