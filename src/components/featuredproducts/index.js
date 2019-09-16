import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import getSymbolFromCurrency from 'currency-symbol-map'

import SEO from "../../components/seo"
import {BlockWaypoint} from "../../components/common/legacy/waypoint"

const shopOptions = require("../../../static/admin/shop_options")

const slugify = require('@sindresorhus/slugify')

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

class FeaturedProducts extends React.Component {

    render() {

        const //basepath = shopOptions.basePath,
            //tagpath = shopOptions.tagPath,
            productpath = shopOptions.productPath,
            //shoptagline = shopOptions.shopTagline,
            shopcurrency = shopOptions.shopCurrency
            //metatitletpl = shopOptions.shopMetaTitleTpl,
            //metadescriptiontpl = shopOptions.shopMetaDescriptionTpl

        var shop_coin = getSymbolFromCurrency(shopcurrency)

        return (
            <StaticQuery
                query={graphql`
              query ShopFeaturedProductQuery {
                shoptags: allShopifyProduct {
                    distinct(field: tags)
                }
                allShopifyProduct(
                    sort: {
                        fields: [createdAt]
                        order: DESC
                    }
                    limit: 8
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
                            <section className="ftco-section ftco-featured">
                                <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-featured .ftco-animate'}>
                                    <div className="container">
                                        <div className="row justify-content-center mb-3 pb-3">
                                            <div className="col-md-12 heading-section text-center ftco-animate">
                                                <span className="subheading">Featured Products</span>
                                                <h2 className="mb-4">Our Products</h2>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and Consonantia</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
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

export default FeaturedProducts