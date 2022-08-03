import * as React from 'react';
import Button from './Button';
import Typography from './Typography';
import ImageHeroUnitLayout from './ImageHeroUnitLayout';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function ImageHeroUnit(props) {
  return (
    <ImageHeroUnitLayout
      sxBackground={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={props.backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        {props.header}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        {props.description}
      </Typography>
      <Button
        startIcon={props.hasStartIcon ? (<ArrowBackIcon fontSize="small" />) : null}
        color="secondary"
        variant="contained"
        size="large"
        component={Link}
        to={props.linkTo}
        sx={{ minWidth: 200 }}
      >
        {props.buttonDescription}
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        {props.smallText}
      </Typography>
    </ImageHeroUnitLayout>
  );
}