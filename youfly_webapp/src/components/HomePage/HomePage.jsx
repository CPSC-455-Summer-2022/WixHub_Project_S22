import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "../CommonComponents/Copyright";
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';

const homePageCards = [
  {
    location: "Vancouver",
    description: "a Canadian city in Beautiful British Columbia"
  },
  {
    location: "London",
    description: "a cool British city"
  },
  {
    location: "Shanghai",
    description: "a cool Asian city"
  }
];

const theme = createTheme();

const description = "Youfly is a travel booking website that allows users to create\
 a personalized profile by answering a series of questions.\
 Based on your profile, Youfly will provide optimal travel destination recommendations";

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <HeroUnit title={"Welcome!"} description={description} />
        <Album cards={homePageCards} hasActions={false} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}