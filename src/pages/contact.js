import React from 'react'
//import {Link} from 'gatsby'
import SEO from "../components/seo"
import {BlockWaypoint} from "../components/common/legacy/waypoint"

import Map from '../components/common/map'

const center = { lat: 50, lng: 10 }
const mapProps = {
    options: {
        center,
        zoom: 8,
    },
    onMount: map => {
        new window.google.maps.Marker({
            position: center,
            map,
            title: 'Europe',
        })
    },
}


class Contact extends React.Component {

    componentDidMount(){

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwS9a_M-fvI_H6XHC4Cs8lyeVgUPYRdWtvE9PLcvWN8O00Jf3U/exec'
        const form = document.forms['submit-to-google-sheet']

        /*form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
        })*/

        //window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation')
            var alertmsg = document.getElementById('contact-success-msg')
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else {
                        event.preventDefault()
                        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                            .then(response => {

                                form.reset()
                                form.classList.remove('was-validated');
                                alertmsg.style.display = 'block'

                                //var dismiss = setTimeout(() => {
                                //    alertmsg.style.display = 'none';
                                //}, 6000)

                                console.log('Success!', response )

                                return true
                            })
                            .catch(error => console.error('Error!', error.message))
                    }
                    form.classList.add('was-validated');



                }, false);
            });
        //}, false);
    }

    render() {
        //const {location, title} = this.props
        return (
            <>
                <SEO title="Contact"/>
                <div className="hero-wrap hero-bread" style={{background: "linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)), no-repeat center url('/images/bg_1.jpg')"}}>
                    <BlockWaypoint ref={el => this.el = this.el} innerchild={'.hero-bread .ftco-animate'}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9 ftco-animate text-center">
                                <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span>
                                    <span>Contact us</span></p>
                                <h1 className="mb-0 bread">Contact us</h1>
                            </div>
                        </div>
                    </div>
                    </BlockWaypoint>
                </div>

                <section className="ftco-section contact-section bg-light">
                    <BlockWaypoint ref={el => this.el = this.el} innerchild={'.contact-section .ftco-animate'}>
                    <div className="container">
                        <div className="row d-flex mb-5 contact-info">
                            <div className="w-100"></div>
                            <div className="col-md-3 d-flex">
                                <div className="info bg-white p-4">
                                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="info bg-white p-4">
                                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="info bg-white p-4">
                                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="info bg-white p-4">
                                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row block-9">

                            <div className="col-md-12" id="contact-success-msg" style={{display: "none"}}>
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <h4 className="alert-heading">Thanks for being awesome!</h4>
                                    <p>
                                        We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible.
                                        <br/>
                                        <br/>
                                        Talk to you soon,
                                        <br />
                                        <em>Open4G Labs</em>
                                    </p>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>


                            <div className="col-md-6 order-md-last d-flex">

                                <form name="submit-to-google-sheet" className="bg-white p-5 contact-form needs-validation" noValidate>
                                    <div className="form-group">
                                        <input name="contactName" type="text" className="form-control" placeholder="Your Name" required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input name="contactEmail" type="text" className="form-control" placeholder="Your Email" required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input name="contactSubject" type="text" className="form-control" placeholder="Subject" required/>
                                        <div className="invalid-feedback">
                                            Please provide a subject.
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="contactMessage" id="" cols="30" rows="7" className="form-control"
                                                  placeholder="Message" required></textarea>
                                        <div className="invalid-feedback">
                                            Please provide a message before continue...
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                                    </div>
                                </form>

                            </div>

                            <div className="col-md-6 d-flex">
                                <Map id="map" {...mapProps} />
                            </div>
                        </div>
                    </div>
                    </BlockWaypoint>
                </section>
            </>
        )
    }
}

export default Contact