import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { BlogPostQuery } from '../../graphql-types'

export default function BlogPost({ data }: { data: BlogPostQuery }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post?.frontmatter?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post?.html || '' }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
