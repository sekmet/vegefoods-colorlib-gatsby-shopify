import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
//import FeaturedImage from "./featuredImage"
import Img from 'gatsby-image';
import SEO from "../../components/seo"
import {BlockWaypoint} from "../../components/common/legacy/waypoint"

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
                            date
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
            //const frontmatter = nodeitem.frontmatter
            //{/*<FeaturedImage alt={nodeitem.node.frontmatter.featuredImage.alt} filename={nodeitem.node.frontmatter.featuredImage.src} /> */}
            //console.log(typeof pageContext.articlepath, pageContext.articlepath, (pageContext.articlepath !== false && pageContext.articlepath !== "false"))

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
                                return (

                                    <div className="col-md-12 d-flex ftco-animate" key={nodeitem.node.id}>
                                        <div className="blog-entry align-self-stretch d-md-flex">
                                            {/*<a href="/blog-single" className="block-20"
                                               style={{backgroundImage: "url('/images/image_1.jpg')"}}>
                                            </a>*/}
                                            <Link
                                                to={pageContext.articlepath !== false && pageContext.articlepath !== "false" ? `${pageContext.articlepath}${nodeitem.node.frontmatter.path}` : nodeitem.node.frontmatter.path}
                                                className="block-20">
                                                {nodeitem.node.frontmatter.featuredImage ?
                                                    <Img
                                                        fluid={nodeitem.node.frontmatter.featuredImage.src.childImageSharp.fluid}/>
                                                    : <img src="/images/pic01.jpg" alt="Gatsby in Space"/>}
                                            </Link>
                                            <div className="text d-block pl-md-4">
                                                <div className="meta mb-3">
                                                    <div><a href="/#">July 20, 2019</a></div>
                                                    <div><a href="/#">Admin</a></div>
                                                    <div><a href="/#" className="meta-chat"><span
                                                        className="icon-chat"></span> 3</a></div>
                                                </div>
                                                <h3 className="heading"><a href="/#">{nodeitem.node.frontmatter.title}</a></h3>
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
                                        <div className="sidebar-box ftco-animate">
                                            <h3 className="heading">Categories</h3>
                                            <ul className="categories">
                                                <li><a href="/#">Vegetables <span>(12)</span></a></li>
                                                <li><a href="/#">Fruits <span>(22)</span></a></li>
                                                <li><a href="/#">Juice <span>(37)</span></a></li>
                                                <li><a href="/#">Dries <span>(42)</span></a></li>
                                            </ul>
                                        </div>

                                        <div className="sidebar-box ftco-animate">
                                            <h3 className="heading">Recent Blog</h3>
                                            <div className="block-21 mb-4 d-flex">
                                                <a href="/#" className="blog-img mr-4"
                                                   style={{backgroundImage: "url(/images/image_1.jpg)"}}></a>
                                                <div className="text">
                                                    <h3 className="heading-1"><a href="/#">Even the all-powerful Pointing has no
                                                        control about the blind texts</a></h3>
                                                    <div className="meta">
                                                        <div><a href="/#"><span className="icon-calendar"></span> April 09, 2019</a>
                                                        </div>
                                                        <div><a href="/#"><span className="icon-person"></span> Admin</a></div>
                                                        <div><a href="/#"><span className="icon-chat"></span> 19</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="block-21 mb-4 d-flex">
                                                <a href="/#" className="blog-img mr-4"
                                                   style={{backgroundImage: "url(/images/image_2.jpg)"}}></a>
                                                <div className="text">
                                                    <h3 className="heading-1"><a href="/#">Even the all-powerful Pointing has no
                                                        control about the blind texts</a></h3>
                                                    <div className="meta">
                                                        <div><a href="/#"><span className="icon-calendar"></span> April 09, 2019</a>
                                                        </div>
                                                        <div><a href="/#"><span className="icon-person"></span> Admin</a></div>
                                                        <div><a href="/#"><span className="icon-chat"></span> 19</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="block-21 mb-4 d-flex">
                                                <a href="/#" className="blog-img mr-4"
                                                   style={{backgroundImage: "url(/images/image_3.jpg)"}}></a>
                                                <div className="text">
                                                    <h3 className="heading-1"><a href="/#">Even the all-powerful Pointing has no
                                                        control about the blind texts</a></h3>
                                                    <div className="meta">
                                                        <div><a href="/#"><span className="icon-calendar"></span> April 09, 2019</a>
                                                        </div>
                                                        <div><a href="/#"><span className="icon-person"></span> Admin</a></div>
                                                        <div><a href="/#"><span className="icon-chat"></span> 19</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sidebar-box ftco-animate">
                                            <h3 className="heading">Tag Cloud</h3>
                                            <div className="tagcloud">
                                                <a href="/#" className="tag-cloud-link">fruits</a>
                                                <a href="/#" className="tag-cloud-link">tomatoe</a>
                                                <a href="/#" className="tag-cloud-link">mango</a>
                                                <a href="/#" className="tag-cloud-link">apple</a>
                                                <a href="/#" className="tag-cloud-link">carrots</a>
                                                <a href="/#" className="tag-cloud-link">orange</a>
                                                <a href="/#" className="tag-cloud-link">pepper</a>
                                                <a href="/#" className="tag-cloud-link">eggplant</a>
                                            </div>
                                        </div>

                                        <div className="sidebar-box ftco-animate">
                                            <h3 className="heading">Paragraph</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                                                necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                                                sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                        </div>
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