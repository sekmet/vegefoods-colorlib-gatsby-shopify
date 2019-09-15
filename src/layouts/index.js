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
//import "scss/style.scss"

/*import "./css/open-iconic-bootstrap.min.css"
import "./css/animate.css"
import "./css/owl.carousel.min.css"
import "./css/owl.theme.default.min.css"
import "./css/magnific-popup.css"
import "./css/aos.css"
import "./css/ionicons.min.css"
//import "./css/bootstrap-datepicker.css"
import "./css/jquery.timepicker.css"
import "./css/flaticon.css"
import "./css/icomoon.css"
import "./css/style.css"*/

import TopBar from "../components/topbar";
import NavBar from "../components/navbar";


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
