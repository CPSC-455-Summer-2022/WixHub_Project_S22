import * as React from 'react';
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../context/auth';
import GenerateRecommendationButton from './GenerateRecommendationButton';
import destinationService from '../../redux/services/destinationService';
import userService from '../../redux/services/userService';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

export default function UserDashboardPage() {
	// const { user } = useContext(AuthContext);
	const user = useSelector((state) => state.userReducer.currUser[0]._id);
	console.log(user);
	const [userObject, setUserObject] = useState({}) // !!!TODO: eventually put the userObject into state once Sherman is done and it should still work
	const [userDestinations, setUserDestinations] = useState([]);
	const [description, setDescription] = useState("")
	const [open, setOpen] = useState(true)

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
					setUserDestinations(prevState => [...prevState, destinationJson])
				}
			}
		}
		getUserDestinations();

		return () => isSubscribed = false;
	}, [user])

	useEffect(() => {
		setDescription(`Hello, ${userObject.f_name}`);
	}, [userObject])

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
				<Album userDestinations={userDestinations} setUserDestinations={setUserDestinations} hasActions={true} />
			</main>
			<Footer />
		</React.Fragment>
	);
}