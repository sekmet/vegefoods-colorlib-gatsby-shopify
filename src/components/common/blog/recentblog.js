import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image';

class RecentBlog extends React.Component {

    render() {


        return (
            <StaticQuery
                query={graphql`
              query RecentBlogQuery {
                recentBlog: allMarkdownRemark(filter: {frontmatter: {layout: {eq: "post"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
                  edges {
                    node {
                      id
                      frontmatter {
                        title
                        date(formatString: "MMM DD, Y")
                        layout
                        path
                        templateKey
                        editorpick
                        featuredImage {
                          src {
                            childImageSharp {
                              fluid(maxWidth: 80, maxHeight: 80, fit: COVER, background: "white") {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          alt
                        }
                      }
                    }
                  }
                }
                }
            `}
                render={data => {
                    const recentblog = data.recentBlog.edges
                    const pageContext = this.props.pageContext
                    return (
                        <>
                            <div className="sidebar-box ftco-animate">
                                <h3 className="heading">Recent Blog</h3>

                                {recentblog.map((recent) => {
                                        var recentLink = pageContext.articlepath !== false && pageContext.articlepath !== "false" ? `${pageContext.articlepath}${recent.node.frontmatter.path}` : recent.node.frontmatter.path
                                        return (<div className="block-21 mb-4 d-flex" key={recent.node.id}>
                                            <Link
                                                to={recentLink}
                                                className="blog-img mr-4">
                                                {recent.node.frontmatter.featuredImage ?
                                                    <Img
                                                        fluid={recent.node.frontmatter.featuredImage.src.childImageSharp.fluid} alt={recent.node.frontmatter.featuredImage.alt}/>
                                                    : <img src="/images/no-image.svg" alt={recent.node.frontmatter.title} style={{width: "80px", height: "80px"}}/>}
                                            </Link>
                                            <div className="text">
                                                <h3 className="heading-1"><Link to={recentLink}>{recent.node.frontmatter.title}</Link></h3>
                                                <div className="meta">
                                                    <div><a href="/#"><span
                                                        className="icon-calendar"></span> {recent.node.frontmatter.date}</a>
                                                    </div>
                                                    <div><a href="/#"><span
                                                        className="icon-person"></span> {recent.node.frontmatter.category}</a></div>
                                                    <div><a href="/#"><span className="icon-chat"></span> 0</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                )}

                            </div>
                        </>
                    )
                }}
            />
        )
    }
}

export default RecentBlog