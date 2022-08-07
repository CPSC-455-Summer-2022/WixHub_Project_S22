import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VacationActions from './VacationActions';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const DestinationCard = (props) => {
  const navigate = useNavigate();

	return (
		<Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <CardActionArea onClick={() => {
                if (props.hasActions) {
                  navigate("/DestinationPage", {state: {
                    destination: props.destination
                    }})
                }}}>
                <CardMedia
                  component="img"
                  image={props.destination.image}
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
              </CardActionArea>
              {props.hasActions && <VacationActions destinationId={props.destination.destinationId} />}
            </Card>
          </Grid>
	);
}