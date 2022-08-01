import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VacationActions from './VacationActions';
import Grid from '@mui/material/Grid';

export const DestinationCard = (props) => {
	const cardID = props.destination._id

	return (
		<Grid key={cardID} item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1579724984996-c2d12999e8f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.destination.city}
                </Typography>
                <Typography>
                  {props.destination.country}
                </Typography>
              </CardContent>
              {props.hasActions && <VacationActions cardId={cardID} setUserDestinations={props.setUserDestinations} />}
            </Card>
          </Grid>
	);
}