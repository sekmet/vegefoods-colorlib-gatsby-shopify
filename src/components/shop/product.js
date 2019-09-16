import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import getSymbolFromCurrency from 'currency-symbol-map'

import ProductForm from './product_form'
import SEO, { StructuredData } from "../../components/seo"
import {BlockWaypoint} from "../../components/common/legacy/waypoint"

const metaReplace = (textdata, find, replace) => {
    var replaceString = textdata
    for (var i = 0; i < find.length; i++) {
        replaceString = replaceString.replace(find[i], replace[i])
    }
    return replaceString
}


class ProductPage extends React.Component {

  render() {

  const {data, pageContext} = this.props
  const product = data.shopifyProduct
  const { shoptagline, shopcurrency, productoptions, productpath, metatitletpl, metadescriptiontpl } = pageContext
  var shop_coin = getSymbolFromCurrency(shopcurrency)

  //console.log(props)
    //meta vars
    var pTags = [...product.tags]
    var ptag = pTags[0]
    var findMeta = ['%SHOPIFYPRODUCTTAG%','%SHOPIFYPRODUCTNAME%','%STORENAME%']
    var replaceMeta = [ptag,product.title,shoptagline]


    //structured data for products
  let variantOffers = []
    product.variants.map((prodvar) => {
        var iprodvar = {
            price: prodvar.price,
            url: `${productpath !== false && productpath !== "false" ? productpath : ''}/${product.handle}`,
            currency: shopcurrency
        }

        variantOffers.push(iprodvar)
        return true
    })

   let offerImages = []
    product.images.map(pImg => {
        var tmpImg = pImg.localFile.childImageSharp.fluid.src
        offerImages.push(tmpImg)
        return true
    })

  var sData = {
      name: product.title,
      description: product.description,
      sku: product ? product.variants[0].sku : '',
      images: offerImages,
      vendor: product ? product.vendor : 'Vendor name',
      offers: variantOffers
  }

  return (
    <>
    <SEO title={metatitletpl ? metaReplace(metatitletpl,findMeta,replaceMeta) : product.title}
         tagline={shoptagline}
         description={metadescriptiontpl ? metaReplace(metadescriptiontpl,findMeta,replaceMeta) : `${product.description.substring(0,109)}...`}
    />
    <StructuredData type="product" data={sData} />
    <div className="hero-wrap hero-bread" style={{background: `linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)), url('${product.images[0].localFile.childImageSharp.fluid ? product.images[0].localFile.childImageSharp.fluid.src : '/images/no-image.svg'}')`}}>
        <BlockWaypoint ref={el => this.el = this.el} innerchild={'.hero-bread .ftco-animate'}>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 ftco-animate text-center">
                    <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span
                        className="mr-2"><Link to="/shop">Shop</Link></span> <span>{product.tags[0]}</span></p>
                    <h1 className="mb-0 bread">{product.title}</h1>
                </div>
            </div>
        </div>
        </BlockWaypoint>
    </div>


    <section className="ftco-section">
        <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-section .ftco-animate'}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mb-5 ftco-animate">
                    {product.images.map(x => (
                        <Image
                            fluid={x.localFile.childImageSharp.fluid}
                            key={x.id}
                            alt={product.title}
                            className="img-fluid"
                        />
                    ))}
                </div>
                <div className="col-lg-6 product-details pl-md-5 ftco-animate">
                    <h3>{product.title}</h3>
                    <div className="rating d-flex">
                        <p className="text-left mr-4">
                            <a href="#" className="mr-2">0.0</a>
                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                            <a href="#"><span className="ion-ios-star-outline"></span></a>
                        </p>
                        <p className="text-left mr-4">
                            <a href="#" className="mr-2" style={{color: "#000"}}>0 <span
                                style={{color: "#bbb"}}>Rating</span></a>
                        </p>
                        <p className="text-left">
                            <a href="#" className="mr-2" style={{color: "#000"}}>500 <span
                                style={{color: "#bbb"}}>Sold</span></a>
                        </p>
                    </div>

                    <ProductForm product={product} currency={shop_coin} options={productoptions} />

                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
                </div>
            </div>

        </div>
        </BlockWaypoint>
    </section>

      </>
  )
}}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description  
      descriptionHtml
      tags
      vendor
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
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
        sku
        title
        weight
        weightUnit          
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 540, maxHeight: 432) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      createdAt
      publishedAt
      updatedAt  
    }
  }
`

export default ProductPage
