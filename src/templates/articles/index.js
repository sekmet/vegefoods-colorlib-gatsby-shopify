import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
//import FeaturedImage from "./featuredImage"
import Img from 'gatsby-image';
import SEO from "../../components/seo"
import {BlockWaypoint} from "../../components/common/legacy/waypoint"
import BlogCategories from "../../components/common/blog/categories";
import RecentBlog from "../../components/common/blog/recentblog";
import TagCloud from "../../components/common/blog/tagcloud";

class Articles extends React.Component {

    render() {
        const {pageContext} = this.props

        const metatitle = pageContext ? pageContext.metatitletpl : this.props.metaTitle
        const metadescription = pageContext ? pageContext.metadescriptiontpl : this.props.metaDescription

        return (
            <StaticQuery
                query={graphql`
                  query ArticlesQueryCustom {
                    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "post"}}}, sort: {fields: frontmatter___date, order: DESC}) {
                      edges {
                        node {
                          id
                          frontmatter {
                            title
                            date(formatString: "MMM DD, Y")
                            templateKey
                            tagline
                            category
                            editorpick
                            description
                            featuredImage {
                              src {
                                childImageSharp {
                                  fluid(maxWidth: 275, maxHeight: 250, fit: COVER, background: "white") {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                              alt
                            }
                            layout
                            path
                          }
                        }
                      }
                    }
                    }
                `}
        render={data => {

            const nodes = data.allMarkdownRemark.edges
            return (
                <>
                    <SEO title={metatitle} description={metadescription}/>
                    <div className="hero-wrap hero-bread" style={{background: "linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)), url('/images/image_3.jpg')"}}>
                        <BlockWaypoint ref={el => this.el = this.el} innerchild={'.hero-bread .ftco-animate'}>
                            <div className="container">
                                <div
                                    className="row no-gutters slider-text align-items-center justify-content-center">
                                    <div className="col-md-9 ftco-animate text-center">
                                        <p className="breadcrumbs"><span className="mr-2"><a
                                            href="/">Home</a></span>
                                            <span>Blog</span></p>
                                        <h1 className="mb-0 bread">{pageContext ? pageContext.blogtagline : `Blogify Theme Articles`}</h1>
                                    </div>
                                </div>
                            </div>
                        </BlockWaypoint>
                    </div>

                    <section className="ftco-section ftco-degree-bg">
                        <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-degree-bg .ftco-animate'}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 ftco-animate">
                                        <div className="row">


                            {nodes.map((nodeitem) => {
                                var theLink = pageContext.articlepath !== false && pageContext.articlepath !== "false" ? `${pageContext.articlepath}${nodeitem.node.frontmatter.path}` : nodeitem.node.frontmatter.path

                                return (

                                    <div className="col-md-12 d-flex ftco-animate" key={nodeitem.node.id}>
                                        <div className="blog-entry align-self-stretch d-md-flex">
                                            {/*<a href="/blog-single" className="block-20"
                                               style={{backgroundImage: "url('/images/image_1.jpg')"}}>
                                            </a>*/}
                                            <Link
                                                to={theLink}
                                                className="block-20">
                                                {nodeitem.node.frontmatter.featuredImage ?
                                                    <Img
                                                        fluid={nodeitem.node.frontmatter.featuredImage.src.childImageSharp.fluid}/>
                                                    : <img src="/images/no-image.svg" alt={nodeitem.node.frontmatter.title} style={{width: "275px", height: "250px"}}/>}
                                            </Link>
                                            <div className="text d-block pl-md-4">
                                                <div className="meta mb-3">
                                                    <div><a href="/#">{nodeitem.node.frontmatter.date}</a></div>
                                                    <div><a href="/#">{nodeitem.node.frontmatter.category}</a></div>
                                                    <div><a href="/#" className="meta-chat"><span
                                                        className="icon-chat"></span> 0</a></div>
                                                </div>
                                                <h3 className="heading"><Link to={theLink}>{nodeitem.node.frontmatter.title}</Link></h3>
                                                <p>{nodeitem.node.frontmatter.description}</p>
                                                <p>
                                                    <Link
                                                        to={pageContext.articlepath !== false && pageContext.articlepath !== "false"
                                                            ? `${pageContext.articlepath}${nodeitem.node.frontmatter.path}`
                                                            : nodeitem.node.frontmatter.path}
                                                        className="btn btn-primary py-2 px-3">{pageContext.readmorebtn ? pageContext.readmorebtn : `Read more`}</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}


                                        </div>
                                    </div>
                                    {/* .col-md-8 */}
                                    <div className="col-lg-4 sidebar ftco-animate">
                                        <div className="sidebar-box">
                                            <form action="#" className="search-form">
                                                <div className="form-group">
                                                    <span className="icon ion-ios-search"></span>
                                                    <input type="text" className="form-control" placeholder="Search..."/>
                                                </div>
                                            </form>
                                        </div>

                                        <BlogCategories/>

                                        <RecentBlog pageContext={pageContext}/>

                                        <TagCloud/>

                                        {/*<div className="sidebar-box ftco-animate">
                                            <h3 className="heading">Paragraph</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                                                necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                                                sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                        </div>*/}
                                    </div>


                                </div>
                            </div>
                        </BlockWaypoint>
                    </section>
                </>
            )
        }}
    />
    )
    }
}

export default Articles