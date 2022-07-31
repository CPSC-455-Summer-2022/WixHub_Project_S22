import * as React from 'react';
import Footer from "../CommonComponents/Footer";
import Album from '../CommonComponents/Album';
import ProductSmokingHero from './ProductSmokingHero';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';

const homePageDestinations = [
  {
    city: "Vancouver",
    country: "Canada"
  },
  {
    city: "London",
    country: "England"
  },
  {
    city: "Tokyo",
    country: "Japan"
  }
];

// const description = "Youfly is a travel booking website that allows users to create a personalized profile by answering a series of questions. Based on your profile, Youfly will provide optimal travel destination recommendations";

export default function LandingPage() {
  return (
    <React.Fragment>
      <main>
      <ProductHero />
      <ProductValues />
      <Album userDestinations={homePageDestinations} hasActions={false} />
      <ProductHowItWorks />
      <ProductSmokingHero />
      </main>
      <Footer />
    </React.Fragment>
  );
}