import "./globals.css";
import { satoshi, oswald } from "./fonts/fonts";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${oswald.variable}`}> 
      <body className="font-body">
        {/* El Header se muestra en todas las páginas */}
        <Header/>
        {children}
      </body>
    </html>
  );
}