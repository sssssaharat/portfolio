import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Personal porfolio ",
   icons: {
    icon: 'asset/Hompage.png',
   sizes: '32x32',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
