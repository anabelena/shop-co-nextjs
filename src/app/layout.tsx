import "./globals.css";
import { satoshi, oswald } from "./fonts/fonts";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${oswald.variable}`}>
      <body className="font-body">
        <Banner />
        <Header />
        {children}
      </body>
    </html>
  );
}
