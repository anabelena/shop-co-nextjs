"use client";

import { createContext, useState, ReactNode, Dispatch } from "react";

import { SetStateAction } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  color: string | null;
  size: string | null;
  quantity: number;
}

interface ShoppingCartContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  cartProducts: CartItem[]; //array of objects
  setCartProducts: Dispatch<SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
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
    setCartProducts((prev) =>
      quantity <= 0
        ? prev.filter((product) => product.id !== id)
        : prev.map((product) =>
            product.id === id
              ? { ...product, quantity: quantity }
              : product
          )
    );
  };

  const removeFromCart = (id: number) => {
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
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
