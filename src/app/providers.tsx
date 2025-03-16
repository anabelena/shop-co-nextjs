'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShoppingCartProvider } from "@/context/cartContext";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider> {children} </ShoppingCartProvider>
    </QueryClientProvider>
  );
}
