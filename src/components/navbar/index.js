import React from 'react'
import {Link} from 'gatsby'
import $ from 'jquery'

const toggleMenuMobile = () => {

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
        }
    }

    if (isMobile.any())
        $(".navbar-toggler").click()
    else
        return false

}


class NavBar extends React.Component {

    render() {
        const {location, title} = this.props

        return (
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">

                        <div className="d-block d-sm-none">
                            <form action="#" className="search-form">
                                <div className="form-group">
                                    <span className="icon ion-ios-search"></span>
                                    <input type="text" className="form-control" placeholder="Search..."/>
                                </div>
                            </form>
                        </div>

                        <ul className="navbar-nav ml-auto">
                            <li className={location.pathname === "/" ? "nav-item active" : "nav-item"}><Link to="/" className="nav-link" onClick={() => toggleMenuMobile()}>Home</Link></li>
                            <li className={location.pathname === "/shop" ? "nav-item active" : "nav-item"}><Link to="/shop" className="nav-link" onClick={() => toggleMenuMobile()}>Shop</Link></li>
                            {/*<li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown04"
                                   data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">Shop</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown04">
                                    <Link className="dropdown-item" to="/shop">Shop</Link>
                                    <a className="dropdown-item" href="/wishlist">Wishlist</a>
                                    <a className="dropdown-item" href="/product">Single
                                        Product</a>
                                    <a className="dropdown-item" href="/cart">Cart</a>
                                    <a className="dropdown-item" href="/checkout">Checkout</a>
                                </div>
                            </li>*/}
                            <li className={location.pathname === "/about" ? "nav-item active" : "nav-item"}>
                                <Link to="/about" className="nav-link" onClick={() => toggleMenuMobile()}>About</Link></li>
                            <li className={location.pathname === "/blog" ? "nav-item active" : "nav-item"}>
                                <Link to="/blog" className="nav-link" onClick={() => toggleMenuMobile()}>Blog</Link></li>
                            <li className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/contact" className="nav-link" onClick={() => toggleMenuMobile()}>Contact</Link></li>
                            <li className="nav-item cta cta-colored">
                                <Link to="/#cart" className="nav-link" onClick={() => toggleMenuMobile()}>
                                    <span className="icon-shopping_cart"></span>Cart (0)</Link></li>

                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar