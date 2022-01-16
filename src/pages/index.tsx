import { GetServerSideProps } from "next"
import { Header } from "../components/Header"
import { allProducts } from "../services/Product"
import { HomeProps } from "../typings/product"

export default function Home({ products }: HomeProps) {

  return (
    <>
      <Header />
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
