import { AboutPage } from '@/components'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
      <Head>
        <title>About - WasteAI.co</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="About - WasteAI.co" />
        <meta name="description" content="WasteAI.co is a cutting-edge website that uses deep learning techniques to classify trash in the image uploaded to the website into different categories.  Upload an image of your trash and let WasteAI.co help you sort it correctly" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wasteai.co/" />
        <meta property="og:title" content="About - WasteAI.co" />
        <meta property="og:description" content="WasteAI.co is a cutting-edge website that uses deep learning techniques to classify trash in the image uploaded to the website into different categories.  Upload an image of your trash and let WasteAI.co help you sort it correctly" />
        <meta property="og:image" content="/preview.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wasteai.co/" />
        <meta property="twitter:title" content="About - WasteAI.co" />
        <meta property="twitter:description" content="WasteAI.co is a cutting-edge website that uses deep learning techniques to classify trash in the image uploaded to the website into different categories.  Upload an image of your trash and let WasteAI.co help you sort it correctly" />
        <meta property="twitter:image" content="/preview.svg" />
      </Head>
      <div className="about">
        <AboutPage />
      </div>
    </>
  )
}

export default about