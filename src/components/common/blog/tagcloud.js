import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
//import Img from 'gatsby-image'
const slugify = require('@sindresorhus/slugify')

class TagCloud extends React.Component {

    render() {


        return (
            <StaticQuery
                query={graphql`
              query TagCloudQuery {
                tagcloud: allMarkdownRemark {
                  distinct(field: frontmatter___tags)
                  group(field: frontmatter___tags) {
                    totalCount
                    field
                    fieldValue
                  }
                }
                }
            `}
                render={data => {
                    const tagcloud = data.tagcloud.group
                    return (
                        <>
                            <div className="sidebar-box ftco-animate">
                                <h3 className="heading">Tag Cloud</h3>
                                <div className="tagcloud">
                                    {tagcloud.map((tag, idx) => {
                                        return (<a href={`/tag/${slugify(tag.fieldValue)}`} className="tag-cloud-link" key={idx}>{tag.fieldValue}</a>)
                                    })}
                                </div>
                            </div>
                        </>
                    )
                }}
            />
        )
    }
}

export default TagCloud