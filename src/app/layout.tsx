import "./globals.css";
import { satoshi, oswald } from "./fonts/fonts";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${oswald.variable}`}>
      <body className="font-body">
        <main className="max-w-[1440px] mx-auto px-5">
          <Banner />
          <Header />
          {children}
          {/* <Footer/> */}
        </main>
      </body>
    </html>
  );
}
