import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import { Toaster } from 'react-hot-toast';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Toaster />
      <Component {...pageProps} />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></Script>
      <Footer />
    </>
  );
}
