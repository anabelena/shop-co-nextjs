"use client";
import { createContext, useState, ReactNode, Dispatch } from "react";
import { SetStateAction } from "react";
import { ICartItem } from "@/types/cart";

interface ShoppingCartContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  cartProducts: ICartItem[]; //array of objects
  setCartProducts: Dispatch<SetStateAction<ICartItem[]>>;
  addToCart: (item: ICartItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<ICartItem[]>([]);

  const addToCart = (item: ICartItem) => {
    setCartProducts((prev) => {
      const exists = prev.some((product) => product.id === item.id);

      return exists
        ? prev.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + item.quantity }
              : product
          )
        : [...prev, item];
    });

    setCount((prev) => prev + item.quantity);
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartProducts((prev) => {
      const updatedCart =
        quantity <= 0
          ? prev.filter((product) => product.id !== id) // Remove item if quantity is 0
          : prev.map((product) =>
              product.id === id ? { ...product, quantity: quantity } : product
            );

      // Calculate new total count
      const newCount = updatedCart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setCount(newCount); // Update count
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCartProducts((prev) => {
      const updatedCart = prev.filter((product) => product.id !== id); // Remove the product
      // Recalculate the count based on the remaining products
      const newCount = updatedCart.reduce(
        (sum, product) => sum + product.quantity,
        0
      );
      setCount(newCount); // Update the count
      return updatedCart; // Return the updated cart
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        cartProducts,
        setCartProducts,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
