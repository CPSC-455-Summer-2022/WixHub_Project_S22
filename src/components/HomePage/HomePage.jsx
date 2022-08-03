import * as React from 'react';
import Footer from "../CommonComponents/Footer";
import Album from '../CommonComponents/Album';
import ProductSmokingHero from './ProductSmokingHero';
import { ImageHeroUnit } from '../CommonComponents/ImageHeroUnit';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import Typography from '../CommonComponents/Typography';

const homePageDestinations = [
  {
    city: "Vancouver",
    country: "Canada",
    image: "https://source.unsplash.com/Yc9h5SJdEzI",
    _id: "1"
  },
  {
    city: "Tokyo",
    country: "Japan",
    image: "https://source.unsplash.com/4HG5hlhmZg8",
    _id: "2"
  },
  {
    city: "London",
    country: "England",
    image: "https://source.unsplash.com/iXqTqC-f6jI",
    _id: "3"
  }
];

const backgroundImage =
  'https://source.unsplash.com/GA2sc8nIOsk';

export default function LandingPage() {
  return (
    <React.Fragment>
      <main>
      <ImageHeroUnit 
        backgroundImage={backgroundImage}
        header="Youfly"
        description="Find your next vacation using our personalized recommendation algorithm"
        buttonDescription="Find Vacation"
        linkTo="/DestinationRecommendationPage"
        smallText="Discover the experience"
      />
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