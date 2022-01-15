import { GetServerSideProps } from "next"
import { allProducts, product } from "../services/Product"
import { HomeProps, Product } from "../typings/product"

export default function Home({ products }: HomeProps) {

  return (
    <>
      {
        products.map(product => (
          <h1 key={product.node.id}>{product.node.title}</h1>
        ))
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allProductsData = await allProducts()

  return {
    props: {
      products: allProductsData.products.edges
    }
  }
} 
