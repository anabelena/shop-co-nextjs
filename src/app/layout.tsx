import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets:["latin"], //subconjunto para idiomas soportados
  weight:["400","700"], //normal and bold
  style:["normal","italic"], 
  display:"swap", //carga la fuente de manera que no bloquee el renderizado
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
