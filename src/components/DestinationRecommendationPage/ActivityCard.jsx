import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';

export const ActivityCard = (props) => {
	// !!!TODO: hyperlink props.activity.activityLink
	return (
		<Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
				<CardActionArea href={props.activity.activityLink}>
					<CardMedia
						component="img"
						image={props.activity.activityImage} // !!!TODO: Change this to match the destination db model after Josh changes it
						alt="destination"
					/>
					<CardContent sx={{ flexGrow: 1 }}>
						<Typography gutterBottom variant="h5" component="h2">
						{props.activity.activityName}
						</Typography>
						<Typography>
						{props.activity.activityDescription}
						</Typography>
					</CardContent>
			  	</CardActionArea>
            </Card>
        </Grid>
	);
}