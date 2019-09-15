import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
// these two libraries are client-side only
import Client from "shopify-buy"
import ShopifyBuy from "@shopify/buy-button-js"

/*const options = useStaticQuery(graphql`
    query ShopifyButtonQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`)*/

const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN ? process.env.GATSBY_SHOPIFY_ACCESS_TOKEN : process.env.SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.GATSBY_SHOP_NAME ? process.env.GATSBY_SHOP_NAME : process.env.SHOP_NAME}.myshopify.com`,
})
const shopifyUI = ShopifyBuy.UI.init(client)
// custom component using shopify client-side libraries
class ShopifyBuyButton extends React.Component {
  componentDidMount() {
    //add button js
    //console.log('this.props.productId == > ', this.props.productId)
    let productId = null
    // extract base64id
    var b64id = `${this.props.productId}`.split('__')[2]
    if (b64id !== 'undefined'){
      var productGid = atob(b64id)
      productId = `${productGid}`.split('Product/')[1]
    }

    //console.log('productId base64id == > ', productId)

    if (productId !== null)
    shopifyUI.createComponent('product', {
      id: productId,
      node: document.getElementById('my-product'),
      options: this.props.options
        /*{
        product: {
          text     : { button: 'Add to Cart' },
          iframe   : false,
          contents : {
            img   : false,
            title : false,
            price : false,
            options: false
          },
          templates : {
            button : '<button class="button primary icon solid fa-cart-plus {{data.classes.product.button}}">{{data.buttonText}}</button>'
          },
          buttonDestination: 'cart'
        },
        toggle: {
          contents: {
            count: true,
            icon: true,
            title: false,
          },
          styles: {
            button: {
              'background-color': '#f67878',
            }
          }
        },
        cart: {
          startOpen: false,
          contents: {
            title: true,
            lineItems: true,
            footer: true,
            note: true,
          },
          text: {
            title: 'Cart',
            empty: 'Your cart is empty.',
            button: 'Checkout',
            total: 'Total',
            currency: 'BRL',
            notice: 'Shipping and discount codes are added at checkout.',
            noteDescription: 'Special instructions for seller',
          },
          styles: {
            button: {
              'background-color': '#f67878',
            }
          }
        }
      }*/
    });
  }

  render() {
  return (<div id="my-product"></div>)
  }
}

export default ShopifyBuyButton