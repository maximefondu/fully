import database from '@helpers/database'
import { gql } from 'graphql-request'

const getProducts = () => {
    return database.request(
        gql`
            query {
                products {
                    data {
                        id
                        attributes {
                            title
                        }
                    }
                }
            }
        `
    )
}

export default getProducts
