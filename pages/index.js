import Head from "next/head";
import { Inter } from "@next/font/google";
import { About, Footer, Header, Navbar, Howitworks, Contact } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>WasteAI.co - Snap, Sort, Succeed with WasteAI.co!</title>
        <meta name="title" content="WasteAi.co - Snap, Sort, Succeed with WasteAI.co!" />
        <meta name="description" content="WasteAI.co is a cutting-edge website that uses deep learning techniques to classify trash in the image uploaded to the website into different categories. Upload an image of your trash and let WasteAI.co help you sort it correctly" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wasteai.co/" />
        <meta property="og:title" content="WasteAi.co - Snap, Sort, Succeed with WasteAI.co!" />
        <meta property="og:description" content="WasteAI.co is a cutting-edge website that uses deep learning techniques to classify trash in the image uploaded to the website into different categories. Upload an image of your trash and let WasteAI.co help you sort it correctly" />
        <meta property="og:image" content="/preview.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wasteai.co" />
        <meta property="twitter:title" content="WasteAi.co - Snap, Sort, Succeed with WasteAI.co!" />
        <meta property="twitter:description" content="WasteAI.co is a cutting-edge website that uses deep learning techniques to classify trash in the image uploaded to the website into different categories. Upload an image of your trash and let WasteAI.co help you sort it correctly" />
        <meta property="twitter:image" content="/preview.svg" />

        {/* Google Search Console */}
        <meta name="google-site-verification" content="phLHzduVhagCj4Sykgf-2aHKUFvS25YXV8MNULVoW-Q" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <About />
        <Howitworks />
        <Contact />
      </main>
    </>
  );
}
