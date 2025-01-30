import { IProduct } from './../types/product';


export async function getProducts() {
  if (!process.env.NEXT_PUBLIC_PRODUCTS) {
    throw new Error("NEXT_PUBLIC_PRODUCTS is not defined");
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS}`);
  const data = await response.json();
  return data;
}

export async function getProductById(id: string) {

  if (!process.env.NEXT_PUBLIC_PRODUCTS) {
    throw new Error("NEXT_PUBLIC_PRODUCTS is not defined");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS}/${id}`);
  // const response = await fetch('https://fakestoreapi.com/products/2')

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = response.json();

  return data;
}

export async function getProductsCategory() {
  if (!process.env.NEXT_PUBLIC_CATEGORY) {
    throw new Error("NEXT_PUBLIC_CATEGORY is not defined");
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_CATEGORY}`);
  const data = await response.json();
  return data
}

export async function getThumbnailImage(){

  if (!process.env.NEXT_PUBLIC_IMAGE){
    throw new Error("NEXT_PUBLIC_IMAGE is not defined")
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_IMAGE}`)
  const data:IProduct[] = await response.json()
  const onlyImages:string[] = data.map(({image})=>image)
  return onlyImages
}