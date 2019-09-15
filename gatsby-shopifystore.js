module.exports = {
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
            button : '<a class="btn btn-black text-white py-3 px-5 {{data.classes.product.button}}">{{data.buttonText}}</a>'
        },
        buttonDestination: 'cart',
        quantiyLabel: 'Quantity'
    },
    toggle: {
        contents: {
            count: true,
            icon: true,
            title: false,
        },
        styles: {
            button: {
                'background-color': '#78b657',
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
            currency: 'USD',
            notice: 'Shipping and discount codes are added at checkout.',
            noteDescription: 'Special instructions for seller',
        },
        styles: {
            button: {
                'background-color': '#78b657',
            }
        }
    }
}