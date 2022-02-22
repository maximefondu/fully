import { GraphQLClient } from 'graphql-request'

const database = new GraphQLClient(`${process.env.STRAPI_API_URL}graphql`, {
    headers: {
        authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
})

export default database
