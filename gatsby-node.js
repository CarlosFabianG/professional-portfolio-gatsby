const path = require('path')

exports.createPages =  async ({actions, graphql}) => {
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
            path: `/project/${project.slug}/`,
            component: require.resolve(`./src/templates/project.js`),
            context: {
                slug: project.slug
            }
        })
    })
}

