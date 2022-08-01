import * as React from 'react';
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../context/auth';
import GenerateRecommendationButton from './GenerateRecommendationButton';
import destinationService from '../../redux/services/destinationService';
import userService from '../../redux/services/userService';

export default function UserDashboardPage() {
	const { user } = useContext(AuthContext);
	const [userObject, setUserObject] = useState({}) // !!!TODO: eventually put the userObject into state once Sherman is done and it should still work
	const [userDestinations, setUserDestinations] = useState([]);
	const [description, setDescription] = useState("")

	useEffect(() => {
		let isSubscribed = true // Prevent duplicate calls

		async function getUserDestinations() {
			
			const userJson = await userService.getUser(user)
			if (isSubscribed) {
				setUserObject(userJson)
			}
			const destinations = userJson.destinations

			// loop through user object's destinations and add them to userDestinations
			for (const destinationId of destinations) {
				// set userDestinations
				const destinationJson = await destinationService.getDestinationByDestinationID(destinationId)
				if (isSubscribed) {
					setUserDestinations(prevState => [...prevState, destinationJson[0]])
				}
			}
		}
		getUserDestinations();

		return () => isSubscribed = false; 
	}, [user])

	useEffect(() => {
		setDescription(`Hello, ${userObject.f_name}`);
	}, [userObject])

	return (
		<React.Fragment>
			<main>
				<HeroUnit title={"User Dashboard"} description={description} />
				<Album userDestinations={userDestinations} setUserDestinations={setUserDestinations} hasActions={true} />
				<GenerateRecommendationButton text={"Generate another recommendation"} />
			</main>
			<Footer />
		</React.Fragment>
	);
}