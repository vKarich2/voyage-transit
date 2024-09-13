import { Raleway } from "next/font/google";
import "./globals.css";

import Container from "@/components/Container";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Voyage Transit",
  description: "Один з найкращих перевізників між Україною та Німеччиною",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={`${raleway.className} antialiased`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
