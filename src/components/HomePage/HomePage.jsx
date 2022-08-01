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
    image: "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
  },
  {
    city: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  },
  {
    city: "London",
    country: "England",
    image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
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