import { GetServerSideProps } from "next"
import { Banner } from "../components/Banner"
import { Header } from "../components/Header"
import { HeaderInfo } from "../components/HeaderInfo"
import { allProducts } from "../services/Product"
import { HomeProps } from "../typings/product"

export default function Home({ products }: HomeProps) {

  return (
    <>
        <HeaderInfo />
        <Header />
        {/* <Banner /> */}
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
