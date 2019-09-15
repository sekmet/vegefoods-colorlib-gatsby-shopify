import React from "react"
import { Link } from "gatsby"
//import Image from "../components/image"
import { BlockWaypoint} from "../components/common/legacy/waypoint"
import Newsletter from "../components/newsletter"
import SEO from "../components/seo"
import Legacy from "../components/common/legacy";

class IndexPage extends React.Component {

    render() {
        return (
            <>
            <SEO title="Vegefoods - Free Bootstrap 4 Template by Colorlib"/>
            <section id="home-section" className="hero">
                <BlockWaypoint ref={el => this.el = this.el} innerchild={'.slider-item .ftco-animate'}>
                    <div className="home-slider owl-carousel">
                        <div className="slider-item" style={{background: "linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)), url(/images/bg_2.jpg)"}}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div
                                    className="row slider-text justify-content-center align-items-center"
                                    data-scrollax-parent="true">


                                    <div className="col-md-12 ftco-animate text-center">
                                        <h1 className="mb-2">We serve Fresh
                                            Vegestables &amp; Fruits</h1>
                                        <h2 className="subheading mb-4">We deliver organic
                                            vegetables &amp; fruits</h2>
                                        <p><Link to="/shop" className="btn btn-primary">View Details</Link></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="slider-item" style={{background: "linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)), url(/images/bg_3.jpg)"}}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div
                                    className="row slider-text justify-content-center align-items-center"
                                    data-scrollax-parent="true">

                                    <div className="col-sm-12 ftco-animate text-center">
                                        <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
                                        <h2 className="subheading mb-4">We deliver organic
                                            vegetables &amp; fruits</h2>
                                        <p><Link to="/shop" className="btn btn-primary">View Details</Link></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </BlockWaypoint>
            </section>

            <section className="ftco-section">
                <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-services .ftco-animate'}>
                    <div className="container">
                        <div className="row no-gutters ftco-services">
                            <div
                                className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                <div className="media block-6 services mb-md-0 mb-4">
                                    <div
                                        className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                                        <span className="flaticon-shipped"></span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Free Shipping</h3>
                                        <span>On order over $100</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                <div className="media block-6 services mb-md-0 mb-4">
                                    <div
                                        className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                                        <span className="flaticon-diet"></span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Always Fresh</h3>
                                        <span>Product well package</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                <div className="media block-6 services mb-md-0 mb-4">
                                    <div
                                        className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                                        <span className="flaticon-award"></span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Superior Quality</h3>
                                        <span>Quality Products</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                <div className="media block-6 services mb-md-0 mb-4">
                                    <div
                                        className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                                        <span className="flaticon-customer-service"></span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading">Support</h3>
                                        <span>24/7 Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlockWaypoint>
            </section>

            <section className="ftco-section ftco-category ftco-no-pt">
                <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-category .ftco-animate'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 order-md-last align-items-stretch d-flex">
                                        <div
                                            className="category-wrap-2 ftco-animate img align-self-stretch d-flex"
                                            style={{backgroundImage: "url(/images/category.jpg)"}}>
                                            <div className="text text-center">
                                                <h2>Vegetables</h2>
                                                <p>Protect the health of every home</p>
                                                <p><a href="/#" className="btn btn-primary">Shop now</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div
                                            className="category-wrap ftco-animate img mb-4 d-flex align-items-end"
                                            style={{backgroundImage: "url(/images/category-1.jpg)"}}>
                                            <div className="text px-3 py-1">
                                                <h2 className="mb-0"><a href="/#">Fruits</a></h2>
                                            </div>
                                        </div>
                                        <div
                                            className="category-wrap ftco-animate img d-flex align-items-end"
                                            style={{backgroundImage: "url(/images/category-2.jpg)"}}>
                                            <div className="text px-3 py-1">
                                                <h2 className="mb-0"><a href="/#">Vegetables</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div
                                    className="category-wrap ftco-animate img mb-4 d-flex align-items-end"
                                    style={{backgroundImage: "url(/images/category-3.jpg)"}}>
                                    <div className="text px-3 py-1">
                                        <h2 className="mb-0"><a href="/#">Juices</a></h2>
                                    </div>
                                </div>
                                <div className="category-wrap ftco-animate img d-flex align-items-end"
                                     style={{backgroundImage: "url(/images/category-4.jpg)"}}>
                                    <div className="text px-3 py-1">
                                        <h2 className="mb-0"><a href="/#">Dried</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlockWaypoint>
            </section>

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
                            <div className="col-md-6 col-lg-3 ftco-animate">
                                <div className="product">
                                    <a href="/#" className="img-prod"><img className="img-fluid"
                                                                           src="/images/product-1.jpg"
                                                                           alt="Colorlib Template"/>
                                        <span className="status">30%</span>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3 text-center">
                                        <h3><a href="/#">Bell Pepper</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span
                                                    className="mr-2 price-dc">$120.00</span><span
                                                    className="price-sale">$80.00</span></p>
                                            </div>
                                        </div>
                                        <div className="bottom-area d-flex px-3">
                                            <div className="m-auto d-flex">
                                                <a href="/#"
                                                   className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                    <span><i className="ion-ios-menu"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                    <span><i className="ion-ios-cart"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="heart d-flex justify-content-center align-items-center ">
                                                    <span><i className="ion-ios-heart"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 ftco-animate">
                                <div className="product">
                                    <a href="/#" className="img-prod"><img className="img-fluid"
                                                                           src="/images/product-2.jpg"
                                                                           alt="Colorlib Template"/>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3 text-center">
                                        <h3><a href="/#">Strawberry</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                        </div>
                                        <div className="bottom-area d-flex px-3">
                                            <div className="m-auto d-flex">
                                                <a href="/#"
                                                   className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                    <span><i className="ion-ios-menu"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                    <span><i className="ion-ios-cart"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="heart d-flex justify-content-center align-items-center ">
                                                    <span><i className="ion-ios-heart"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 ftco-animate">
                                <div className="product">
                                    <a href="/#" className="img-prod"><img className="img-fluid"
                                                                           src="/images/product-3.jpg"
                                                                           alt="Colorlib Template"/>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3 text-center">
                                        <h3><a href="/#">Green Beans</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                        </div>
                                        <div className="bottom-area d-flex px-3">
                                            <div className="m-auto d-flex">
                                                <a href="/#"
                                                   className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                    <span><i className="ion-ios-menu"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                    <span><i className="ion-ios-cart"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="heart d-flex justify-content-center align-items-center ">
                                                    <span><i className="ion-ios-heart"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 ftco-animate">
                                <div className="product">
                                    <a href="/#" className="img-prod"><img className="img-fluid"
                                                                           src="/images/product-4.jpg"
                                                                           alt="Colorlib Template"/>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3 text-center">
                                        <h3><a href="/#">Purple Cabbage</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                        </div>
                                        <div className="bottom-area d-flex px-3">
                                            <div className="m-auto d-flex">
                                                <a href="/#"
                                                   className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                    <span><i className="ion-ios-menu"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                    <span><i className="ion-ios-cart"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="heart d-flex justify-content-center align-items-center ">
                                                    <span><i className="ion-ios-heart"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6 col-lg-3 ftco-animate">
                                <div className="product">
                                    <a href="/#" className="img-prod"><img className="img-fluid"
                                                                           src="/images/product-5.jpg"
                                                                           alt="Colorlib Template"/>
                                        <span className="status">30%</span>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3 text-center">
                                        <h3><a href="/#">Tomatoe</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span
                                                    className="mr-2 price-dc">$120.00</span><span
                                                    className="price-sale">$80.00</span></p>
                                            </div>
                                        </div>
                                        <div className="bottom-area d-flex px-3">
                                            <div className="m-auto d-flex">
                                                <a href="/#"
                                                   className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                    <span><i className="ion-ios-menu"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                    <span><i className="ion-ios-cart"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="heart d-flex justify-content-center align-items-center ">
                                                    <span><i className="ion-ios-heart"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 ftco-animate">
                                <div className="product">
                                    <a href="/#" className="img-prod"><img className="img-fluid"
                                                                           src="/images/product-6.jpg"
                                                                           alt="Colorlib Template"/>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3 text-center">
                                        <h3><a href="/#">Brocolli</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                        </div>
                                        <div className="bottom-area d-flex px-3">
                                            <div className="m-auto d-flex">
                                                <a href="/#"
                                                   className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                    <span><i className="ion-ios-menu"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                    <span><i className="ion-ios-cart"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="heart d-flex justify-content-center align-items-center ">
                                                    <span><i className="ion-ios-heart"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 ftco-animate">
                                <div className="product">
                                    <a href="/#" className="img-prod"><img className="img-fluid"
                                                                           src="/images/product-7.jpg"
                                                                           alt="Colorlib Template"/>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3 text-center">
                                        <h3><a href="/#">Carrots</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                        </div>
                                        <div className="bottom-area d-flex px-3">
                                            <div className="m-auto d-flex">
                                                <a href="/#"
                                                   className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                    <span><i className="ion-ios-menu"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                    <span><i className="ion-ios-cart"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="heart d-flex justify-content-center align-items-center ">
                                                    <span><i className="ion-ios-heart"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 ftco-animate">
                                <div className="product">
                                    <a href="/#" className="img-prod"><img className="img-fluid"
                                                                           src="/images/product-8.jpg"
                                                                           alt="Colorlib Template"/>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3 text-center">
                                        <h3><a href="/#">Fruit Juice</a></h3>
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                        </div>
                                        <div className="bottom-area d-flex px-3">
                                            <div className="m-auto d-flex">
                                                <a href="/#"
                                                   className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                    <span><i className="ion-ios-menu"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                    <span><i className="ion-ios-cart"></i></span>
                                                </a>
                                                <a href="/#"
                                                   className="heart d-flex justify-content-center align-items-center ">
                                                    <span><i className="ion-ios-heart"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlockWaypoint>
            </section>

            <section className="ftco-section ftco-section-deal-day img"
                     style={{backgroundImage: "url(/images/bg_3.jpg)"}}>
                <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-section-deal-day .ftco-animate'}>
                    <div className="container">
                        <div className="row justify-content-end">
                            <div
                                className="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate">
                                <span className="subheading">Best Price For You</span>
                                <h2 className="mb-4">Deal of the day</h2>
                                <p>Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia</p>
                                <h3><a href="/#">Spinach</a></h3>
                                <span className="price">$10 <a href="/#">now $5 only</a></span>
                                <div id="timer" className="d-flex mt-5">
                                    <div className="time" id="days"></div>
                                    <div className="time pl-3" id="hours"></div>
                                    <div className="time pl-3" id="minutes"></div>
                                    <div className="time pl-3" id="seconds"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlockWaypoint>
            </section>

            <section className="ftco-section testimony-section">
                <BlockWaypoint ref={el => this.el = this.el} innerchild={'.testimony-section .ftco-animate'}>
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <span className="subheading">Testimony</span>
                                <h2 className="mb-4">Our satisfied customer says</h2>
                                <p>Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they
                                    live in</p>
                            </div>
                        </div>
                        <div className="row ftco-animate">
                            <div className="col-md-12">
                                <div className="carousel-testimony owl-carousel">
                                    <div className="item">
                                        <div className="testimony-wrap p-4 pb-5">
                                            <div className="user-img mb-5"
                                                 style={{backgroundImage: "url(/images/person_1.jpg)"}}>
     <span className="quote d-flex align-items-center justify-content-center">
     <i className="icon-quote-left"></i>
     </span>
                                            </div>
                                            <div className="text text-center">
                                                <p className="mb-5 pl-4 line">Far far away, behind the
                                                    word mountains, far from the countries Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                                <p className="name">Garreth Smith</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap p-4 pb-5">
                                            <div className="user-img mb-5"
                                                 style={{backgroundImage: "url(/images/person_2.jpg)"}}>
     <span className="quote d-flex align-items-center justify-content-center">
     <i className="icon-quote-left"></i>
     </span>
                                            </div>
                                            <div className="text text-center">
                                                <p className="mb-5 pl-4 line">Far far away, behind the
                                                    word mountains, far from the countries Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                                <p className="name">Garreth Smith</p>
                                                <span className="position">Interface Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap p-4 pb-5">
                                            <div className="user-img mb-5"
                                                 style={{backgroundImage: "url(/images/person_3.jpg)"}}>
     <span className="quote d-flex align-items-center justify-content-center">
     <i className="icon-quote-left"></i>
     </span>
                                            </div>
                                            <div className="text text-center">
                                                <p className="mb-5 pl-4 line">Far far away, behind the
                                                    word mountains, far from the countries Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                                <p className="name">Garreth Smith</p>
                                                <span className="position">UI Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap p-4 pb-5">
                                            <div className="user-img mb-5"
                                                 style={{backgroundImage: "url(/images/person_1.jpg)"}}>
     <span className="quote d-flex align-items-center justify-content-center">
     <i className="icon-quote-left"></i>
     </span>
                                            </div>
                                            <div className="text text-center">
                                                <p className="mb-5 pl-4 line">Far far away, behind the
                                                    word mountains, far from the countries Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                                <p className="name">Garreth Smith</p>
                                                <span className="position">Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap p-4 pb-5">
                                            <div className="user-img mb-5"
                                                 style={{backgroundImage: "url(/images/person_1.jpg)"}}>
     <span className="quote d-flex align-items-center justify-content-center">
     <i className="icon-quote-left"></i>
     </span>
                                            </div>
                                            <div className="text text-center">
                                                <p className="mb-5 pl-4 line">Far far away, behind the
                                                    word mountains, far from the countries Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                                <p className="name">Garreth Smith</p>
                                                <span className="position">System Analyst</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlockWaypoint>
            </section>


            <section className="ftco-section ftco-partner">
                <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-partner .ftco-animate'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm ftco-animate">
                                <a href="/#" className="partner"><img src="/images/partner-1.png"
                                                                      className="img-fluid"
                                                                      alt="Colorlib Template"/></a>
                            </div>
                            <div className="col-sm ftco-animate">
                                <a href="/#" className="partner"><img src="/images/partner-2.png"
                                                                      className="img-fluid"
                                                                      alt="Colorlib Template"/></a>
                            </div>
                            <div className="col-sm ftco-animate">
                                <a href="/#" className="partner"><img src="/images/partner-3.png"
                                                                      className="img-fluid"
                                                                      alt="Colorlib Template"/></a>
                            </div>
                            <div className="col-sm ftco-animate">
                                <a href="/#" className="partner"><img src="/images/partner-4.png"
                                                                      className="img-fluid"
                                                                      alt="Colorlib Template"/></a>
                            </div>
                            <div className="col-sm ftco-animate">
                                <a href="/#" className="partner"><img src="/images/partner-5.png"
                                                                      className="img-fluid"
                                                                      alt="Colorlib Template"/></a>
                            </div>
                        </div>
                    </div>
                </BlockWaypoint>
            </section>

            <Newsletter />

            <Legacy/>
        </>
        )
    }
}

export default IndexPage
