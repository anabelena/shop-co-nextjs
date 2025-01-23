export async function getProducts() {
  if (!process.env.NEXT_PUBLIC_PRODUCTS) {
    throw new Error("NEXT_PUBLIC_PRODUCTS is not defined");
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS}`);
  const data = await response.json();
  return data;
}

export async function getProductsCategory({ category }: { category: string }) {

  const categoryUrls: Record<string, string> = {
    women: process.env.NEXT_PUBLIC_CATEGORY_WOMEN || "",
    jewelery: process.env.NEXT_PUBLIC_CATEGORY_JEWELERY || "",
  };

  const apiUrl = categoryUrls[category];

  if (!apiUrl) {
    throw new Error(
      `Categoría "${category}" no válida o no configurada en las variables de entorno.`
    );
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(
        `Error al obtener productos de la categoría "${category}": ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
}
