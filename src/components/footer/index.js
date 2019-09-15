//import { Link } from 'gatsby'
import React from 'react'

const Footer = () => (
    <footer className="ftco-footer ftco-section">
        <div className="container">
            <div className="row">
                <div className="mouse">
                    <a href="/#" className="mouse-icon">
                        <div className="mouse-wheel"><span
                            className="ion-ios-arrow-up"></span></div>
                    </a>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Vegefoods</h2>
                        <p>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia.</p>
                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li className="ftco-animate"><a href="/#"><span
                                className="icon-twitter"></span></a></li>
                            <li className="ftco-animate"><a href="/#"><span
                                className="icon-facebook"></span></a></li>
                            <li className="ftco-animate"><a href="/#"><span
                                className="icon-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4 ml-md-5">
                        <h2 className="ftco-heading-2">Menu</h2>
                        <ul className="list-unstyled">
                            <li><a href="/#" className="py-2 d-block">Shop</a></li>
                            <li><a href="/#" className="py-2 d-block">About</a></li>
                            <li><a href="/#" className="py-2 d-block">Journal</a></li>
                            <li><a href="/#" className="py-2 d-block">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Help</h2>
                        <div className="d-flex">
                            <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                <li><a href="/#" className="py-2 d-block">Shipping
                                    Information</a></li>
                                <li><a href="/#"
                                       className="py-2 d-block">Returns &amp; Exchange</a>
                                </li>
                                <li><a href="/#"
                                       className="py-2 d-block">Terms &amp; Conditions</a>
                                </li>
                                <li><a href="/#" className="py-2 d-block">Privacy
                                    Policy</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="/#" className="py-2 d-block">FAQs</a></li>
                                <li><a href="/#" className="py-2 d-block">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Have a Questions?</h2>
                        <div className="block-23 mb-3">
                            <ul>
                                <li><span className="icon icon-map-marker"></span><span
                                    className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                                </li>
                                <li><a href="/#"><span
                                    className="icon icon-phone"></span><span
                                    className="text">+2 392 3929 210</span></a></li>
                                <li><a href="/#"><span
                                    className="icon icon-envelope"></span><span
                                    className="text">info@yourdomain.com</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">

                    <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright &copy; { new Date().getFullYear() } All rights reserved | This template is made with <i
                            className="icon-heart color-danger"
                            aria-hidden="true"></i> by <a href="https://colorlib.com"
                                                          rel="noopener noreferrer"
                                                          target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
