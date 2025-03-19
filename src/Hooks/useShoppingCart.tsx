import { ShoppingCartContext } from "@/context/cartContext";
import { useContext } from "react";

export function useShoppingCart() {
    const context = useContext(ShoppingCartContext);
    if (!context) {
      throw new Error(
        "useShoppingCart debe usarse dentro de un ShoppingCartProvider"
      );
    }
    return context;
  }
  