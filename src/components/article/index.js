import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
//import map from 'lodash/map'

import SEO, { StructuredData } from "../../components/seo"
import {BlockWaypoint} from "../../components/common/legacy/waypoint"
import BlogCategories from "../common/blog/categories";
import RecentBlog from "../common/blog/recentblog";
import TagCloud from "../common/blog/tagcloud";

class Article extends React.Component {

    render() {

        const {data, pageContext} = this.props

        const {
            category,
            tags,
            description,
            title,
            path,
            date,
            fulldate,
            featuredImage,
            seo
        } = data.markdownRemark.frontmatter
        //const { isIndex } = options
        const html = get(data.markdownRemark, 'html')
        //const isMore = isIndex && !!html.match('<!--more-->')
        const fluid = featuredImage ? get(featuredImage.src, 'childImageSharp.fluid') : false

        const metatitle = seo ? get(seo, 'title') : pageContext.metatitletpl
        const metadescription = seo ? get(seo, 'description') : pageContext.metadescriptiontpl

        const metadata = pageContext.siteMetadata ? pageContext.siteMetadata : false

        //structured data for articles
        var sData = {
            headline: title,
            description: description,
            date: fulldate,
            images: [fluid ? fluid.src : '/images/no-image.svg'],
            author: metadata ? metadata.author : 'Author name',
            publisher: metadata ? metadata.title : 'Publisher name',
            publisherlogo: metadata ? metadata.logo : 'https://www.google.com/logo.jpg',
            urlpage: pageContext.articlepath !== false && pageContext.articlepath !== "false" ? `${pageContext.articlepath}${path}` : `${path}`
        }

        return (
            <>
                <SEO title={metatitle} description={metadescription}/>
                <StructuredData type="article" data={sData}/>
                <div className="hero-wrap hero-bread" style={{backgroundImage: "url('/images/bg_1.jpg')"}}>
                    <BlockWaypoint ref={el => this.el = this.el} innerchild={'.hero-bread .ftco-animate'}>
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-center justify-content-center">
                                <div className="col-md-9 ftco-animate text-center">
                                    <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span>
                                        <span>Blog</span></p>
                                    <h1 className="mb-0 bread">{title}</h1>
                                </div>
                            </div>
                        </div>
                    </BlockWaypoint>
                </div>

                <section className="ftco-section ftco-degree-bg" key={path}>
                    <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-section .ftco-animate'}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 ftco-animate">
                                    <Link style={{boxShadow: 'none'}}
                                          to={pageContext.articlepath !== false && pageContext.articlepath !== "false" ? `${pageContext.articlepath}${path}` : `${path}`}>
                                        <h2 className="mb-3">{title}</h2>
                                        <time dateTime={date}>{date}</time>
                                    </Link>

                                    <p>{description}</p>

                                    {fluid ? (
                                        <Img fluid={fluid} style={{display: 'block', margin: '0 auto'}}/>
                                    ) : (
                                        ''
                                    )}

                                    <div dangerouslySetInnerHTML={{__html: html}}/>


                                    <div className="tag-widget post-tag-container mb-5 mt-5">
                                        <div className="tagcloud">
                                            <a href="/#" className="tag-cloud-link">Life</a>
                                            <a href="/#" className="tag-cloud-link">Sport</a>
                                            <a href="/#" className="tag-cloud-link">Tech</a>
                                            <a href="/#" className="tag-cloud-link">Travel</a>
                                        </div>
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
    }
}

export const query = graphql`
    query($postpath: String!) {
        markdownRemark(frontmatter: { path: { eq: $postpath }, templateKey: { eq: "post" } }) {
            id
            html
            frontmatter {
                layout
                title
                path
                category
                tags
                description
                date(formatString: "YYYY/MM/DD")
                fulldate: date
                seo {
                    title
                    description
                }
                featuredImage {
                    src {
                        childImageSharp {
                            fluid(maxWidth: 730) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    alt
                }
            }
        }
    }
`

export default Article