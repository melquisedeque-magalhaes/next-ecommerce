// import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'
// import Client from 'shopify-buy'

export const client = new ApolloClient({
    uri: process.env.SHOPIFY_STORE_DOMAIN,
    cache: new InMemoryCache(),
    headers: {
        "X-Shopify-Storefront-Access-Token": `${process.env.SHOPIFY_STOREFRONT_API_TOKEN}`,
    },
})

// export const client = Client.buildClient({
//     domain: process.env.SHOPIFY_STORE_DOMAIN,
//     storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN
// });