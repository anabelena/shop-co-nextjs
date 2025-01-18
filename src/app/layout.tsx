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
        <div className="max-w-[1440px] mx-auto px-4">
          <Banner />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
