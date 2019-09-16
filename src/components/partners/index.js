import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import {BlockWaypoint} from "../../components/common/legacy/waypoint"

class partnersWidget extends React.Component {

    render() {

        return (
            <StaticQuery
                query={graphql`
                  fragment fluidImage on File {
                    childImageSharp {
                      fluid(maxWidth: 159, maxHeight: 65) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  query {
                    partnerOne: file(relativePath: { eq: "partner-1.png" }) {
                      ...fluidImage
                    }
                    partnerTwo: file(relativePath: { eq: "partner-2.png" }) {
                      ...fluidImage
                    }
                   partnerThree: file(relativePath: { eq: "partner-3.png" }) {
                      ...fluidImage
                    }
                   partnerFour: file(relativePath: { eq: "partner-4.png" }) {
                      ...fluidImage
                    }
                   partnerFive: file(relativePath: { eq: "partner-5.png" }) {
                      ...fluidImage
                    }
                  }
            `}
                render={data => {

                    return (
                        <>
                            <section className="ftco-section ftco-partner">
                                <BlockWaypoint ref={el => this.el = this.el} innerchild={'.ftco-partner .ftco-animate'}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm ftco-animate">
                                                <a href="/#" className="partner"><Image fluid={data.partnerOne.childImageSharp.fluid} alt={`Partners`}/></a>
                                            </div>
                                            <div className="col-sm ftco-animate">
                                                <a href="/#" className="partner">><Image fluid={data.partnerTwo.childImageSharp.fluid} alt={`Partners`}/></a>
                                            </div>
                                            <div className="col-sm ftco-animate">
                                                <a href="/#" className="partner">><Image fluid={data.partnerThree.childImageSharp.fluid} alt={`Partners`}/></a>
                                            </div>
                                            <div className="col-sm ftco-animate">
                                                <a href="/#" className="partner"><Image fluid={data.partnerFour.childImageSharp.fluid} alt={`Partners`}/></a>
                                            </div>
                                            <div className="col-sm ftco-animate">
                                                <a href="/#" className="partner"><Image fluid={data.partnerFive.childImageSharp.fluid} alt={`Partners`}/></a>
                                            </div>
                                        </div>
                                    </div>
                                </BlockWaypoint>
                            </section>
                        </>
                    )
                }}
            />
        )
    }
}

export default partnersWidget