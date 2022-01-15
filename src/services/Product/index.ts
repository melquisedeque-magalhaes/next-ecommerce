import { AllProductsInterface, ProductInfosInterface } from "../../typings/product"
import { client } from "../apollo-client"
import { AllProducts, Product } from '../gql/product/query'

export async function product(id: string) {
    const { data } = await client.query<ProductInfosInterface>({
        query: Product,
        fetchPolicy: 'no-cache',
        variables: {
            product: {
                id
            }
        }
    })

    return data
} 

export async function allProducts() {
    const { data } = await client.query<AllProductsInterface>({
        query: AllProducts,
        fetchPolicy: 'no-cache',
    })

    return data
} 

