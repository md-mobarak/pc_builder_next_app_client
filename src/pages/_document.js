import Footer from "@/components/shared/Footer";
import Navbar from "@/components/Navbar";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav>
          <Navbar />
        </nav>
        <div className="min-h-screen">
          <Main />
          <NextScript />
        </div>
        <Footer />
      </body>
    </Html>
  );
}
