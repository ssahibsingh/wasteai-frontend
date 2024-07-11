# Frontend - WasteAI: Snap Sort Succeed

## Problem Statement

Waste segregation is one of the primary challenges to recycling systems in major cities in our country. In India, 62 million tons of garbage is generated annually, out of which only 12 million tons is treated because we are not able to segregate waste at the source. Proper waste segregation helps reduce general waste output, identify reusable items, and set aside items for recycling. Failing to segregate waste properly results in mixed waste in landfills, causing environmental harm.

## Project Idea

The idea is to decrease human intervention and make the waste segregation process more productive. Users can take or upload an image, and the model will predict the type of waste, ensuring it lands in the correct recycle bin.

## Demo


You can view the live demo of the WasteAI frontend [here](https://wasteai.vercel.app/). 

> Please note that while the frontend is accessible, the backend services are currently unavailable due to issues with paid deployment. For a fully functional experience, you can run the project locally by following the setup instructions provided below.

## Tech Stack

- **Frontend**: Next.js, Bootstrap
- **Deployment**: Docker & DigitalOcean

## Features

- Upload or capture an image of waste.
- Display the predicted waste type.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ssahibsingh/wasteai-frontend.git
   cd wasteai-frontend
   ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to http://localhost:3000.

## Future Scope
* Integration with Sensor Technologies
* Integration with Smart Waste Bins
* Mobile Application Development
* Real-Time Monitoring and Feedback

## Backend Repository
For information about the backend, please refer to the [WasteAI Backend Repository](https://github.com/ssahibsingh/wasteai-backend).
