import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Personal porfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Nav/>
        {children}</body>
    </html>
  );
}
