import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/Footer";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      
        <div className="min-h-screen">
          <Main />
          <NextScript />
        </div>
        <Footer />
      </body>
    </Html>
  );
}
