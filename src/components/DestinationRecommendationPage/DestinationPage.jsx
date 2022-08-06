import React, { useEffect, useState } from "react";
import { ImageHeroUnit } from '../CommonComponents/ImageHeroUnit';
import { useLocation } from "react-router-dom";
import Typography from '../CommonComponents/Typography';
import { ActivityAlbum } from "./ActivityAlbum";

export const DestinationPage = () => {
	const location = useLocation()
	const [destination, setDestination] = useState({
		image: "",
		city: "",
		country: "",
		description: "",
		activityRecommendations: []
	})

	useEffect(() => {
		setDestination(location.state.destination)
	}, [location])
	
	
	return (
		<React.Fragment>
			<ImageHeroUnit
			// !!!TODO: Make this not overlap with Navbar when on smaller screens
				backgroundImage={destination.image}
				header={`${destination.city}, ${destination.country}`}
				description={destination.description}
				hasStartIcon
				linkTo="/UserDashboardPage"
				buttonDescription="Back to Dashboard"
				smallText=""
			/>
			<Typography variant="h3" marked="center" align="center" component="h2" marginTop={5} marginBottom={5}>
        		Activities in {destination.city}
      		</Typography>
      		<ActivityAlbum activities={destination.activityRecommendations} />
		</React.Fragment>
	);
}
