import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VacationActions from './VacationActions';
import Grid from '@mui/material/Grid';

export const DestinationCard = (props) => {
	return (
		<Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                image={props.destination.image} // !!!TODO: Change this to match the destination db model after Kevin changes it
                alt="destination"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.destination.city}
                </Typography>
                <Typography>
                  {props.destination.country}
                </Typography>
              </CardContent>
              {props.hasActions && <VacationActions cardId={props.cardId} setUserDestinations={props.setUserDestinations} destination={props.destination} />}
            </Card>
          </Grid>
	);
}