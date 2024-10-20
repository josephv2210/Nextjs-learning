import localFont from "next/font/local";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='m-0 p-0 bg-primary text-text-color'
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
