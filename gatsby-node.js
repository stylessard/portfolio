exports.createPages = async ({ actions: { createPage }, graphql }) => {
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

    if (results.error) {
        console.log('Something went wrong here')
        return
    }

    results.data.allProjectsJson.edges.forEach( edge => {
        const project = edge.node

        createPage({
            path: `/projects/${project.slug}/`,
            component: require.resolve("./src/templates/projectTemplate.js"),
            context: {
                slug: project.slug
            }
        })
    })
}