import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'
import path from 'path'

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

interface CreatePagesQuery {
  allMarkdownRemark?: {
    edges?: {
      node?: {
        fields: {
          slug: string
        }
      }
    }[]
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions
  const result = await graphql<CreatePagesQuery>(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch posts on build')
  }
  result.data?.allMarkdownRemark?.edges?.forEach(({ node }) => {
    if (node) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog.tsx`),
        context: {
          slug: node.fields.slug,
        },
      })
    }
  })
}
