"use client"; // Client-side component

import { useState, useEffect } from "react";
// Import the fetch function
import { IProduct } from "@/types/product"; // Import the existing IProduct interface
import { getProductsByLimit } from "@/utils";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";

interface ProductListState {
  products: IProduct[];
  loading: boolean;
  shownCount: number;
  hasMore: boolean;
}

export default function ProductList() {
  const [state, setState] = useState<ProductListState>({
    products: [],
    loading: false,
    shownCount: 0,
    hasMore: true,
  });

  const limit = 12; // Number of products to fetch at a time

  // Function to load products from the API
  const loadProducts = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));

    try {
      const productData = await getProductsByLimit(state.shownCount + limit);
      const newProducts = productData.slice(
        state.shownCount,
        state.shownCount + limit
      ); // Slice to get the next set of products

      if (newProducts.length < limit) {
        setState((prevState) => ({
          ...prevState,
          hasMore: false, // No more products to load
        }));
      }

      setState((prevState) => ({
        ...prevState,
        products: [...prevState.products, ...newProducts], // Add the new products to the list
        loading: false,
        shownCount: prevState.shownCount + newProducts.length, // Update the count of shown products
      }));
    } catch (error) {
      console.error("Error loading products:", error);
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  // Initial load when the component is mounted
  useEffect(() => {
    loadProducts();
  }, []);

  const handleShowMore = () => {
    loadProducts(); // Load more products when the user clicks "Show More"
  };

  return (
    <div>
     
        <div>
            
      <ProductFilter/>

        </div>

      <div className="w-full">
      <h1> Our Products </h1>
        {state.products.length > 0 ? (
          <ul className="grid grid-cols-3 gap-y-8 ">
            {state.products.map((product) => (
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
          <button onClick={handleShowMore} disabled={state.loading}>
            {state.loading ? "Loading..." : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
