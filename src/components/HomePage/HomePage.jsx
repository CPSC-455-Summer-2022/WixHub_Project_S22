import * as React from 'react';
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';
import GenerateRecommendationButton from './GenerateRecommendationButton';

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

const description = "Youfly is a travel booking website that allows users to create a personalized profile by answering a series of questions. Based on your profile, Youfly will provide optimal travel destination recommendations";

export default function LandingPage() {
  return (
    <React.Fragment>
      <main>
        <HeroUnit title={"Welcome!"} description={description} />
        <Album userDestinations={homePageDestinations} hasActions={false} />
        <HeroUnit description={"Want to find your next vacation?"} />
        <GenerateRecommendationButton text={"Generate my recommendation now!"}/>
      </main>
      <Footer />
    </React.Fragment>
  );
}