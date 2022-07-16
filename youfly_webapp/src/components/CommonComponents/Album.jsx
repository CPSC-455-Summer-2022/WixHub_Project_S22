import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VacationActions from './VacationActions';

export default function Album(props) {
  console.log(props.destinations);
	return (
		<Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {props.destinations.map((destination) => (
              <Grid item key={destination} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {destination.city}
                    </Typography>
                    <Typography>
                      {/* {destination.description} */}
                      Temporary description
                    </Typography>
                  </CardContent>
				  {props.hasActions && <VacationActions />}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
	);
}