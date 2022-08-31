import * as React from 'react'
import { graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const ContentPage = ( {data} ) => {
    return (
        <Layout pageTitle={data.contentfulBlogPost.title}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPost.body.childMdx.html,
            }}></div>
        </Layout>
    )
}

export const data = graphql`
  query ($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      body{
        childMdx{
          html
        }
      }
    }
  }
`

export default ContentPage