import * as React from 'react';
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';
import { useEffect, useState } from "react";
import GenerateRecommendationButton from './GenerateRecommendationButton';
import destinationService from '../../services/destinationService';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

export default function UserDashboardPage() {
	const userObject = useSelector((state) => state.userReducer.currUser);
	const [userDestinations, setUserDestinations] = useState([]);
	const [description, setDescription] = useState("")
	const [open, setOpen] = useState(true)

	useEffect(() => {
		let isSubscribed = true // Prevent duplicate calls

		async function getUserDestinations() {
			const destinations = userObject.destinations
			const newDestinations = [];
			// loop through user object's destinations and add them to userDestinations
			for (const destinationId of destinations) {
				// set userDestinations
				const destinationJson = await destinationService.getDestinationByDestinationID(destinationId)
				if (isSubscribed) {
					newDestinations.push(destinationJson)
				}
			}
			if (isSubscribed) {
				setUserDestinations(newDestinations)
			}
		}
		getUserDestinations();

		setDescription(`Hello, ${userObject.f_name}`);
		return () => isSubscribed = false;
	}, [userObject.destinations, userObject.f_name])


	useEffect(() => {
		setTimeout(() => { setOpen(false); }, 500);
	}, [])

	return (
		<React.Fragment>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={open}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<main>
				<HeroUnit title={"User Dashboard"} description={description} />
				<GenerateRecommendationButton text={"Generate another recommendation"} />
				{userDestinations.length > 0 ? <Album userDestinations={userDestinations} setUserDestinations={setUserDestinations} hasActions={true} /> : null}
			</main>
			<Footer />
		</React.Fragment>
	);
}