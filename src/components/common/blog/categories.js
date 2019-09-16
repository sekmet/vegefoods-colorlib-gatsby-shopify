import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
//import Image from 'gatsby-image'

class BlogCategories extends React.Component {

    render() {


        return (
            <StaticQuery
                query={graphql`
              query BlogCategoriesQuery {
                categories: allMarkdownRemark {
                    distinct(field: frontmatter___category)
                    group(field: frontmatter___category) {
                      totalCount
                      field
                      fieldValue
                    }
                  }
                }
            `}
                render={data => {
                    const categories = data.categories.group
                    return (
                        <>
                            <div className="sidebar-box ftco-animate">
                                <h3 className="heading">Categories</h3>
                                <ul className="categories">
                                    {categories.map((categ, idx) => {
                                        return (<li key={idx}><a href="/#">{categ.fieldValue} <span>{`( ${categ.totalCount} )`}</span></a></li>)
                                    })}
                                </ul>
                            </div>
                        </>
                    )
                }}
            />
        )
    }
}

export default BlogCategories