import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ActivityCard } from './ActivityCard';

// !!!TODO: guard against empty activities
export function ActivityAlbum(props) {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {props.activities.map((activity) => (
          <ActivityCard key={activity._id} activity={activity} />
        ))}
      </Grid>
    </Container>
  );
}