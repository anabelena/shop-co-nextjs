import "./globals.css";
import { satoshi, oswald } from "./fonts/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${oswald.variable}`}> 
      <body className="font-body">{children}</body>
    </html>
  );
}