import { gql } from "@apollo/client";

export const Product = gql`{
    product(id: $id) {
        title,
        description,
        totalInventory,
        priceRange {
            maxVariantPrice {
                amount,
                currencyCode
            },
        },
        featuredImage {
            url,
            altText,
            id,
            height
        },
        vendor
    } 
}`

export const AllProducts = gql`{
    products(first: 10) {
      edges {
        node {
            id
            title,
            description,
            totalInventory,
            priceRange {
                maxVariantPrice {
                    amount,
                    currencyCode
                },
            },
            featuredImage {
                url,
                altText,
                id,
                height
            },
            vendor
            }
      }
    }
}`