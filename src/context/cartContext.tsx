"use client";

import { createContext, useState, ReactNode,useContext } from "react";

interface CartItem {
  id: number;
  title: string;
  description: string;
  price:number;
  image:string;
  quantity: number;
}

interface ShoppingCartContextType {
  count: number;
  setCount: (count: number) => void;
  cartProducts: CartItem[];
  setCartProducts: (products: CartItem[]) => void;
  addToCart: (item: CartItem) => void;
}

// Crear el contexto con un valor inicial vacío
export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {

  const [count, setCount] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartProducts((prev) => [...prev, item]);
    setCount((prev) => prev + item.quantity); // Actualiza la cantidad total
  };

  return (
    <ShoppingCartContext.Provider
      value={{ count, setCount, cartProducts, setCartProducts, addToCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Hook personalizado para evitar valores `undefined`
export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useShoppingCart debe usarse dentro de un ShoppingCartProvider");
  }
  return context;
}