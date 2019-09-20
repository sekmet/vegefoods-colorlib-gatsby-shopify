import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import getSymbolFromCurrency from 'currency-symbol-map'

import SEO from "../../components/seo"
import {BlockWaypoint} from "../../components/common/legacy/waypoint"

const slugify = require('@sindresorhus/slugify')

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

class Products extends React.Component {

    render() {

    const {pageContext} = this.props

    const { basepath, tagpath, productpath, shoptagline, shopbtnlabel, shopcurrency, metatitletpl, metadescriptiontpl } = pageContext

    var shop_coin = getSymbolFromCurrency(shopcurrency)

    return (
        <StaticQuery
            query={graphql`
              query ShopProductQuery {
                shoptags: allShopifyProduct {
                    distinct(field: tags)
                }
                allShopifyProduct(
                    sort: {
                        fields: [createdAt]
                        order: DESC
                    }
                ) {
                    edges {
                        node {
                            id
                            title
                            vendor
                            description
                            handle
                            createdAt
                            updatedAt
                            availableForSale
                            priceRange {
                                maxVariantPrice {
                                    amount
                                    currencyCode
                                }
                                minVariantPrice {
                                    amount
                                    currencyCode
                                }
                            }
                            images {
                                id
                                originalSrc
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 253, maxHeight: 203) {
                                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                        }
                                    }
                                }
                            }
                            variants {
                                price
                            }
                            tags
                        }
                    }
                }
                }
            `}
            render={data => {

                return (
                    <>
                        <SEO title={metatitletpl} tagline={shoptagline} description={metadescriptiontpl} />
                        <div className="hero-wrap hero-bread" style={{background: "linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)), no-repeat center url('/images/bg_2.jpg')"}}>
                            <BlockWaypoint ref={el => this.el = this.el} innerchild={'.hero-bread .ftco-animate'}>
                            <div className="container">
                                <div className="row no-gutters slider-text align-items-center justify-content-center">
                                    <div className="col-md-9 ftco-animate text-center">
                                        <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span>
                                            <span>Products</span></p>
                                        <h1 className="mb-0 bread">{shoptagline}</h1>
                                    </div>
                                </div>
                            </div>
                            </BlockWaypoint>
                        </div>


                        <section className="ftco-section">
                            <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-section .ftco-animate'}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 mb-5 text-center">
                                        <ul className="product-category">
                                            <li><Link to="/shop" className="active">All</Link></li>
                                            {data.shoptags.distinct.map( (tag, idx) => {
                                                //console.log(tagpath === false || tagpath === "false", productpath, basepath)
                                                return (<li key={idx}><Link to={`${ tagpath === false || tagpath === "false" ? `${basepath === '/' ? '' : basepath}/${slugify(tag)}` : `${tagpath === '/' ? '' : tagpath}/${slugify(tag)}` }`}>{capitalize(tag)}</Link></li>)
                                                }
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">

                                    {data.allShopifyProduct.edges.map(x => (
                                        <div className="col-md-6 col-lg-3 ftco-animate" key={x.node.id}>
                                            <div className="product">
                                                <Link to={`${productpath !== false && productpath !== "false" ? productpath : ''}/${x.node.handle}/`} className="img-prod">
                                                    <Image
                                                        fluid={x.node.images[0].localFile.childImageSharp.fluid}
                                                        alt={x.node.handle}
                                                    />
                                                    {/*<span className="status">30%</span>*/}
                                                    <div className="overlay"></div>
                                                </Link>
                                                <div className="text py-3 pb-4 px-3 text-center">
                                                    <h3><a href="#">{x.node.title}</a></h3>
                                                    <div className="d-flex">
                                                        <div className="pricing">
                                                            <p className="price">
                                                                {/*<span className="mr-2 price-dc">{shop_coin}{x.node.variants[0].price}</span>*/}
                                                                <span className="price-sale">{shop_coin}{x.node.variants[0].price}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-area d-flex px-3">
                                                        <div className="m-auto d-flex">
                                                            <a href="#"
                                                               className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                                <span><i className="ion-ios-menu"></i></span>
                                                            </a>
                                                            <Link to={`${productpath !== false && productpath !== "false" ? productpath : ''}/${x.node.handle}/`} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                                {/*shopbtnlabel*/}<span><i className="ion-ios-cart"></i></span>
                                                            </Link>
                                                            <a href="#"
                                                               className="heart d-flex justify-content-center align-items-center ">
                                                                <span><i className="ion-ios-heart"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                            </BlockWaypoint>
                        </section>

                    </>
                )
            }}
        />
    )}}

export default Products
