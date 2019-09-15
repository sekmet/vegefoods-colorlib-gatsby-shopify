import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import Client from 'shopify-buy'

//import StoreContext from '/src/context/StoreContext'
import VariantSelector from './variant_selector/index'
import ShopifyBuyButton from '../buybutton/index'


const client = Client.buildClient({
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN ? process.env.GATSBY_SHOPIFY_ACCESS_TOKEN : process.env.SHOPIFY_ACCESS_TOKEN,
    domain: `${process.env.GATSBY_SHOP_NAME ? process.env.GATSBY_SHOP_NAME : process.env.SHOP_NAME}.myshopify.com`,
})

const defaultStoreContext = {
    client,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
    addVariantToCart: () => {},
    removeLineItem: () => {},
    updateLineItem: () => {},
}

const StoreContext = React.createContext(defaultStoreContext)

const ProductForm = props => {
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(props.product.variants[0])
  const context = useContext(StoreContext)
  
  const hasVariants = props.product.variants.length > 1
  const productVariant =
  context.client ? context.client.product.helpers.variantForOptions(props.product, variant) || variant : variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  useEffect(() => {
    let defaultOptionValues = {}
    props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0]
    })
    setVariant(defaultOptionValues)
  }, [])

  useEffect(() => {
    checkAvailability(props.product.shopifyId)
  }, [productVariant])

  const checkAvailability = productId => {
      context.client.product.fetch(productId).then((product) => {
      // this checks the currently selected variant for availability
      const result = product.variants.filter(
        variant => variant.id === productVariant.shopifyId
      )
      setAvailable(result[0].available)
    })
  }
 
  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }

  const handleOptionChange = event => {
    const { target } = event
    setVariant(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  /*const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity)
  }*/

  const variantSelectors = hasVariants
    ? props.product.options.map(option => {
        return (
          <VariantSelector
            onChange={handleOptionChange}
            key={option.id.toString()}
            option={option}
          />
        )
      })
    : null


  return (
    <>

        <p className="price"><span>{props.currency}{productVariant.price}</span></p>
        {/*<a href="#see-more">
            <p>
                {props.product.description.substring(0,333)}...
            </p>
        </a>*/}
        <div className="row mt-4">
            <div className="col-md-6">
                {variantSelectors}

                {/*<div className="form-group d-flex">
                    <div className="select-wrap">
                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                        <select name="" id="" className="form-control">
                            <option value="sm">Small</option>
                            <option value="md">Medium</option>
                            <option value="lg">Large</option>
                            <option value="xlg">Extra Large</option>
                        </select>
                    </div>
                </div>*/}

            </div>
            <div className="w-100"></div>
            <div className="input-group col-md-6 d-flex mb-3">
                <span className="input-group-btn mr-2">
                    <button type="button" className="quantity-left-minus btn" data-type="minus" data-field="">
                   <i className="ion-ios-remove"></i>
                    </button>
                    </span>
                {/*<input type="text" id="quantity" name="quantity" className="form-control input-number"
                       value="1" min="1" max="100"/>*/}

                <input
                    type="number"
                    className="form-control input-number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    step="1"
                    max="100"
                    onChange={handleQuantityChange}
                    value={quantity}
                />

                <span className="input-group-btn ml-2">
                    <button type="button" className="quantity-right-plus btn" data-type="plus" data-field="">
                     <i className="ion-ios-add"></i>
                 </button>
                </span>
            </div>
            {/*<div className="w-100"></div>
            <div className="col-md-12">
                <p style={{color: "#000"}}>600 kg available</p>
            </div>*/}
        </div>

        <div>
            <ShopifyBuyButton productId={props.product.id} disabled={!available} options={props.options} />
            {!available && <p>This Product is out of Stock!</p>}
        </div>

    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
