import * as React from 'react';
import Footer from "../CommonComponents/Footer";
import Album from '../CommonComponents/Album';
import ProductSmokingHero from './ProductSmokingHero';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import Typography from '../CommonComponents/Typography';

const homePageDestinations = [
  {
    city: "Vancouver",
    country: "Canada",
    image: "https://source.unsplash.com/Yc9h5SJdEzI"
  },
  {
    city: "Tokyo",
    country: "Japan",
    image: "https://source.unsplash.com/4HG5hlhmZg8"
  },
  {
    city: "London",
    country: "England",
    image: "https://source.unsplash.com/iXqTqC-f6jI"
  }
];

// const description = "Youfly is a travel booking website that allows users to create a personalized profile by answering a series of questions. Based on your profile, Youfly will provide optimal travel destination recommendations";

export default function LandingPage() {
  return (
    <React.Fragment>
      <main>
      <ProductHero />
      <ProductValues />
      <Typography variant="h3" marked="center" align="center" component="h2" marginTop={5} marginBottom={5}>
        For all types of travelers
      </Typography>
      <Album userDestinations={homePageDestinations} hasActions={false} />
      <ProductHowItWorks />
      <ProductSmokingHero />
      </main>
      <Footer />
    </React.Fragment>
  );
}