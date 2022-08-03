import React from "react";
import { ImageHeroUnit } from '../CommonComponents/ImageHeroUnit';
import { useLocation } from "react-router-dom";
import Typography from '../CommonComponents/Typography';
import { ActivityAlbum } from "./ActivityAlbum";

export const DestinationPage = () => {
	const location = useLocation()
	const passedInState = location.state
	
	return (
		<React.Fragment>
			<ImageHeroUnit
			// !!!TODO: Make sure to de-reference the correct properties after Kevin is done adding to db model
				backgroundImage={passedInState.destination.image}
				header={`${passedInState.destination.city}, ${passedInState.destination.country}`}
				description={passedInState.destination.description}
				hasStartIcon
				linkTo="/UserDashboardPage"
				buttonDescription="Back to Dashboard"
				smallText=""
			/>
			<Typography variant="h3" marked="center" align="center" component="h2" marginTop={5} marginBottom={5}>
        		For all types of travelers
      		</Typography>
      		<ActivityAlbum activities={passedInState.destination.activityRecommendations} />
		</React.Fragment>
	);
}
