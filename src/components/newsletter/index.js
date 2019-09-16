import React from 'react'
import SubscribeInputbox from "gatsby-theme-mailchimped/src/components/subscribeinput";
const mailchimpOptions = require("../../../static/admin/mailchimp_options")

const pageContext = {
    mailchimplistendpoint: mailchimpOptions.mailchimpListEndpoint,
    subscribeformclassname: mailchimpOptions.subscribeFormClassname,
    subscribeinputclassname: mailchimpOptions.subscribeInputClassname,
    subscribeinputplaceholder: mailchimpOptions.subscribeInputPlaceholder,
    subscribesubmitclassname: mailchimpOptions.subscribeSubmitClassname,
    subscribesubmitplaceholder: mailchimpOptions.subscribeSubmitPlaceholder,
}

const Newsletter = () => (

    <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
        <div className="container py-4">
            <div className="row d-flex justify-content-center py-5">
                <div className="col-md-6">
                    <h2 style={{fontSize: "22px"}} className="mb-0">Subcribe to our Newsletter</h2>
                    <span>Get e-mail updates about our latest shops and special offers</span>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <SubscribeInputbox pageContext={pageContext}/>
                </div>
            </div>
        </div>
    </section>
)

export default Newsletter