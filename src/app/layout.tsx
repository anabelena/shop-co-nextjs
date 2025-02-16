import "./globals.css";
import { satoshi, oswald } from "./fonts/fonts";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { ShoppingCartProvider } from "@/context/cartContext";
import Newsletter from "@/components/Newsletter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${oswald.variable}`}>
      <body className="font-body">
        <ShoppingCartProvider>
          <Banner />
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <Header/>
            {children}
            <Newsletter/>
            <Footer/>
          </main>
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
