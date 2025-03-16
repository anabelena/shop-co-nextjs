"use client"; // Client-side component

import { useState, useEffect } from "react";
import { IProduct } from "@/types/product"; // Import the existing IProduct interface
import ProductCard from "@/components/ProductCard";
import { FaSearch } from "react-icons/fa";
import Button from "@/components/Button";

interface ProductListState {
  products: IProduct[];
  visibleProducts: IProduct[];
  loading: boolean;
  shownCount: number;
  hasMore: boolean;
}

export default function ProductList() {
  const [state, setState] = useState<ProductListState>({
    products: [], // Productos cargados
    visibleProducts: [], // Productos que se van a mostrar (cargados progresivamente)
    loading: false,
    shownCount: 0, // Number de productos que se han mostrado
    hasMore: true, // Hay mas?
  });

  const limit = 9;

  // Fetching API
  const loadProducts = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));

    try {
      let productData = state.products;
      if (state.products.length === 0) {
        // Si es primera carga obtener los 20 productos de la API
        productData = await getProductsByLimit(20);
      }

      // Limitar la cantidad de productos visibles
      const newShownCount = Math.min(
        state.shownCount + limit,
        productData.length
      );

      setState((prevState) => ({
        ...prevState,
        products: productData, // Guardamos los 20 productos en el estado
        visibleProducts: productData.slice(0, newShownCount), // Solo mostramos los necesarios
        loading: false,
        shownCount: newShownCount,
        hasMore: newShownCount < productData.length, // Si hay más productos, mostramos el botón
      }));
    } catch (error) {
      console.error("⚠️ Error cargando productos:", error);
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  // Load when component is mounted
  useEffect(() => {
    loadProducts();
  }, []);

  const handleShowMore = () => {
    loadProducts(); //
  };

  return (
    <div>
      <div>
        <div className="hidden tablet:flex items-center bg-baseBg gap-4 px-5 py-3 rounded-[62px] tablet:w-[400px] laptop:w-[480px] desktop:w-[520px]">
          <FaSearch className="text-gray-600 cursor-pointer text-xl" />
          <input
            className="border-none outline-none  bg-baseBg w-full"
            type="text"
            placeholder="Search for products..."
          />
        </div>
        {/* <ProductFilter /> */}
      </div>

      <div className="w-full">
        <h1> Our Products </h1>
        {state.visibleProducts.length > 0 ? (
          <ul className="grid grid-cols-3 gap-y-8 ">
            {state.visibleProducts.map((product) => (
              <li key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available.</p>
        )}
      </div>

      {/* "Show More" button */}
      {state.hasMore && (
        <div>
          <Button
          text="Show more "
          type="neutral"
          onClick={handleShowMore}
          >
          </Button>
          {/* <button onClick={handleShowMore} disabled={state.loading}>
            {state.loading ? "Loading..." : "Show More"}
          </button> */}
        </div>
      )}
    </div>
  );
}
