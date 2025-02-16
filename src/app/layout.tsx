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
          <Header/>
          <main className="mx-auto max-w-[1440px]">
            {children}
          </main>
          <Newsletter/>
          <Footer/>
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
