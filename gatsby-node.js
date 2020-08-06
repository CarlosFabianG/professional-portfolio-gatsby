const path = require('path')

exports.createPages =  async ({actions: {createPage}, graphql}) => {
    const results = await graphql(`
    {
        allProjectsJson {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `)
    if(results.error){
        console.error('Something went wrong!')
        return
    }

    results.data.allProjectsJson.edges.forEach(edge => {
        const project = edge.node

        createPage({
            path: `projects/${project.slug}/`,
            component: require.resolve(`./src/templates/project.js`),
            context: {
                slug: project.slug
            }
        })
    })
}

exports.createPages = async ({graphql, actions:{createPage}}) => {
    const results = await graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                    }
                }
            }
        } 
    }
    `)
    if(results.error){
        console.error('Something went wrong!')
        return
    }

    results.data.allMarkdownRemark.edges.forEach(edge => {
        const path = edge.node.frontmatter.path

        createPage({
            path: `blog/${path}/`,
            component: require.resolve(`./src/templates/blog-post.js`),
            context: {
                pathSlug: path
            }
        })
    })
}