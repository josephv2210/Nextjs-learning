import { Inter } from 'next/font/google';
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import "./globals.css";

const inter = Inter({
  weight: ["100", "300", "500"],
  subsets: ["latin"] 
})

const classBody = "m-0 p-0 bg-primary text-text-color"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${classBody}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
