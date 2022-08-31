import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'


const ContentPage = ({ data }) => {
    return (
        <Layout pageTitle="My Contentful Posts">
            {
                data.allContentfulBlogPost.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                          <Link to={`/content/${node.slug}`}>
                            {node.title}
                          </Link>
                        </h2>
                        <p>Posted: {node.createdAt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
  query{
    allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
      nodes {
        createdAt(formatString: "MMMM D, YYYY")
        slug
        title
        id
      }
    }
  }
`

export default ContentPage