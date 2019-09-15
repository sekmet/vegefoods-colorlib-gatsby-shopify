import React from 'react'
import {Link} from 'gatsby'
import $ from 'jquery'

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
                            <li className={location.pathname === "/" ? "nav-item active" : "nav-item"}><Link to="/" className="nav-link" onClick={() => $(".navbar-toggler").click()}>Home</Link></li>
                            <li className={location.pathname === "/shop" ? "nav-item active" : "nav-item"}><Link to="/shop" className="nav-link" onClick={() => $(".navbar-toggler").click()}>Shop</Link></li>
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
                                <Link to="/about" className="nav-link" onClick={() => $(".navbar-toggler").click()}>About</Link></li>
                            <li className={location.pathname === "/blog" ? "nav-item active" : "nav-item"}>
                                <Link to="/blog" className="nav-link" onClick={() => $(".navbar-toggler").click()}>Blog</Link></li>
                            <li className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/contact" className="nav-link" onClick={() => $(".navbar-toggler").click()}>Contact</Link></li>
                            <li className="nav-item cta cta-colored">
                                <Link to="/#cart" className="nav-link" onClick={() => $(".navbar-toggler").click()}>
                                    <span className="icon-shopping_cart"></span>Cart (0)</Link></li>

                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar