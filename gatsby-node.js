const path = require('path')

exports.createPages =  ({graphql, actions}) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`src/templates/Project.js`)
    return graphql(`
    
    query loadPagesQuery ($limit: Int!) {
      allMarkdownRemark(limit: $limit) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
    `, {limit: 1000}).then( result => {
        if(result.errors){
            throw result.errors
        }
        
        result.data.allMarkdownRemark.edges.forEach(({edge}) => {
            createPage({
                path: `${node.id}`,
                component: projectTemplate
            })
        })
    })
}

