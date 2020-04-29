import React from 'react'
import SEO from '../components/layout/seo'
import Layout from '../components/layout/layout'
import { graphql, Link } from 'gatsby'
import '../global.css'
import { IndexMarkdownQuery } from '../../graphql-types'

const IndexPage = ({ data }: { data: IndexMarkdownQuery }) => {
  console.log(data)
  return (
    <div>
      <SEO title="Blog" description="A cool blog" />
      <Layout>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              <Link to={node.fields?.slug || ''}>
                {node.frontmatter?.title}{' '}
                <span>— {node.frontmatter?.date}</span>
              </Link>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </Layout>
    </div>
  )
}

export const query = graphql`
  query IndexMarkdown {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          html
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
