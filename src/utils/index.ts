export async function getProducts() {
  if (!process.env.NEXT_PUBLIC_PRODUCTS) {
    throw new Error("NEXT_PUBLIC_PRODUCTS is not defined");
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS}`);
  const data = await response.json();
  return data;
}


export async function getProductById(id:number){

  if (!process.env.NEXT_PUBLIC_PRODUCTS){
    throw new Error("NEXT_PUBLIC_PRODUCTS is not defined")
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS}/${id}`)
  
  if(!response.ok){
    throw new Error("Failed to fetch product")
  }

  const data = response.json()

  return data

}


export async function getProductsCategory() {
  
  if(!process.env.NEXT_PUBLIC_CATEGORY){
    throw new Error("NEXT_PUBLIC_CATEGORY is not defined")
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_CATEGORY}`)
  const data = await response.json()
  return data
}

