import React from "react";
import { ImageHeroUnit } from '../CommonComponents/ImageHeroUnit';
import { useLocation } from "react-router-dom";

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
		</React.Fragment>
	);
}