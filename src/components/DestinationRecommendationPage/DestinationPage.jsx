import React from "react";
import { ImageHeroUnit } from '../CommonComponents/ImageHeroUnit';
import { useLocation } from "react-router-dom";
import Typography from '../CommonComponents/Typography';
import Album from "../CommonComponents/Album";

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
      		{/* <Album userDestinations={passedInState.destination} hasActions={false} /> */}
		</React.Fragment>
	);
}
