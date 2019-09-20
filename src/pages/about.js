import React from 'react'
import {Link} from 'gatsby'
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"
import {BlockWaypoint, BlockWaypointCounter} from "../components/common/legacy/waypoint"

class About extends React.Component {

    render() {
        //const {location, title} = this.props
        return (
            <>
                <SEO title="About Us"/>
                <div className="hero-wrap hero-bread" style={{background: "linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)), no-repeat center url('/images/bg_3.jpg')"}}>
                    <BlockWaypoint ref={el => this.el = this.el} innerchild={'.hero-bread .ftco-animate'}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9 ftco-animate text-center">
                                <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span>About us</span>
                                </p>
                                <h1 className="mb-0 bread">About us</h1>
                            </div>
                        </div>
                    </div>
                    </BlockWaypoint>
                </div>

                <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                    <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-section .ftco-animate'}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
                                     style={{backgroundImage: "url(/images/about.jpg)"}}>
                                    <a href="https://vimeo.com/45830194"
                                       className="icon popup-vimeo d-flex justify-content-center align-items-center">
                                        <span className="icon-play"></span>
                                    </a>
                                </div>
                                <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
                                    <div className="heading-section-bold mb-4 mt-md-5">
                                        <div className="ml-md-0">
                                            <h2 className="mb-4">Welcome to Vegefoods an eCommerce website</h2>
                                        </div>
                                    </div>
                                    <div className="pb-md-5">
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                            the Semantics, a large language ocean.</p>
                                        <p>But nothing the copy said could convince her and so it didn’t take long until a few
                                            insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged
                                            her into their agency, where they abused her for their.</p>
                                        <p><Link to="/shop" className="btn btn-primary">Shop now</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BlockWaypoint>
                </section>

                <Newsletter />
                <section className="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage: "url(/images/bg_3.jpg)"}}>
                    <BlockWaypointCounter ref={el => this.el = this.el} innerchild={'.ftco-counter .ftco-animate'}>
                        <div className="container">
                            <div className="row justify-content-center py-5">
                                <div className="col-md-10">
                                    <div className="row">
                                        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                            <div className="block-18 text-center">
                                                <div className="text">
                                                    <strong className="number" data-number="10000">0</strong>
                                                    <span>Happy Customers</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                            <div className="block-18 text-center">
                                                <div className="text">
                                                    <strong className="number" data-number="100">0</strong>
                                                    <span>Branches</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                            <div className="block-18 text-center">
                                                <div className="text">
                                                    <strong className="number" data-number="1000">0</strong>
                                                    <span>Partner</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                            <div className="block-18 text-center">
                                                <div className="text">
                                                    <strong className="number" data-number="100">0</strong>
                                                    <span>Awards</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BlockWaypointCounter>
                </section>
            </>
        )
    }
}

export default About