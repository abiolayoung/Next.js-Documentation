import { Metadata } from "next";

type props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({params}: props): Promise <Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100)
  })
  return {
    title: `Product ${title}`
  }
}

export default function ProductDetails({params}: props) {
  return <h1>Details about product {params.productId}</h1>;
}
