import { Drag } from "@/components";
import Head from "next/head";
import React from "react";

const TryMe = () => {
  return (
    <>
      <Head>
        <title>Try Me - WasteAI.co</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Try Me - WasteAI.co" />
        <meta name="description" content="Try WasteAI.co now and see the power of deep learning in action. Simply upload an image of your trash and our model will accurately predict its type and provide instructions on proper disposal or recycling. Experience the future of waste management today." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wasteai.co/" />
        <meta property="og:title" content="Try Me - WasteAI.co" />
        <meta property="og:description" content="Try WasteAI.co now and see the power of deep learning in action. Simply upload an image of your trash and our model will accurately predict its type and provide instructions on proper disposal or recycling. Experience the future of waste management today." />
        <meta property="og:image" content="/preview.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wasteai.co/" />
        <meta property="twitter:title" content="Try Me - WasteAI.co" />
        <meta property="twitter:description" content="Try WasteAI.co now and see the power of deep learning in action. Simply upload an image of your trash and our model will accurately predict its type and provide instructions on proper disposal or recycling. Experience the future of waste management today." />
        <meta property="twitter:image" content="/preview.svg" />
      </Head>
      <div className="try-me">
        <div className="container">
          <h1 className="text-second text-center display-4 fw-bold">Try Me</h1>
          <div className="row justify-content-center mt-3">
            <Drag />
          </div>
        </div>
      </div>
    </>
  );
};

export default TryMe;
