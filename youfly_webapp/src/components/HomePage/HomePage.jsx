import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';
import GenerateRecommendation from './GenerateRecommendation';

const destinations = [
  {
    city: "Vancouver",
    description: "a Canadian city in Beautiful British Columbia"
  },
  {
    city: "London",
    description: "a cool British city"
  },
  {
    city: "Tokyo",
    description: "a cool Japanese city"
  }
];

const theme = createTheme();

const description = "Youfly is a travel booking website that allows users to create a personalized profile by answering a series of questions. Based on your profile, Youfly will provide optimal travel destination recommendations";

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <HeroUnit title={"Welcome!"} description={description} />
        <Album destinations={destinations} hasActions={false} />
        <HeroUnit description={"Curious about our accuracy?"} />
        <GenerateRecommendation />
      </main>
      <Footer />
    </ThemeProvider>
  );
}