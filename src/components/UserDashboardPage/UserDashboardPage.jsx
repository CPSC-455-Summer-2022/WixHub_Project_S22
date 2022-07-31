import * as React from 'react';
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../context/auth';
import GenerateRecommendationButton from '../HomePage/GenerateRecommendationButton';
import destinationService from '../../redux/services/destinationService';
import userService from '../../redux/services/userService';

export default function UserDashboardPage() {
	const { user } = useContext(AuthContext);
	const [destinations, setDestinations] = useState([]);
	const [userDestinations, setUserDestinations] = useState([]);
	const description = `Hello, ${user.f_name}`

	useEffect(() => {
		async function getUserObject() {
			const responseJson = await userService.getUser(user)
			setDestinations(responseJson.destinations);
		}
		getUserObject()
	}, [user])

	useEffect(() => {
		async function getUserDestinations() {
			// loop through user object's destinations and add them to userDestinations
			for (const destinationId of destinations) {
				// set userDestinations
				const responseJson = await destinationService.getDestinationByDestinationID(destinationId)
				setUserDestinations(prevState => [...prevState, responseJson[0]])
			}
		}
		getUserDestinations();
	}, [destinations])

	return (
		<React.Fragment>
			<main>
				<HeroUnit title={"User Dashboard"} description={description} />
				<Album userDestinations={userDestinations} hasActions={true} />
				<GenerateRecommendationButton text={"Generate another recommendation"} />
			</main>
			<Footer />
		</React.Fragment>
	);
}