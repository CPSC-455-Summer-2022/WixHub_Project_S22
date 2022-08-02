import * as React from 'react';
import Button from '../CommonComponents/Button';
import Typography from '../CommonComponents/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from "react-router-dom";

const backgroundImage =
  'https://source.unsplash.com/GA2sc8nIOsk';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Youfly
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Find your next vacation using our personalized recommendation algorithm
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component={Link}
        to="/DestinationRecommendationPage"
        sx={{ minWidth: 200 }}
      >
        Find Vacation
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}