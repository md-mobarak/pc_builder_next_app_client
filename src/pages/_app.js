import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <nav>
          <Navbar />
        </nav>
        <Component {...pageProps} />
      </SessionProvider>
      <ToastContainer />
    </>
  );
}
