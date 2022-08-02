import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { DestinationCard } from './DestinationCard';

export default function Album(props) {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {props.userDestinations.map((destination) => (
          <DestinationCard key={destination._id} cardId={destination._id} hasActions={props.hasActions} destination={destination} setUserDestinations={props.setUserDestinations} />
        ))}
      </Grid>
    </Container>
  );
}