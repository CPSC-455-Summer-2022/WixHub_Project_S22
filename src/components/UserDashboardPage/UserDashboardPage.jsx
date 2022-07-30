import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../context/auth';
import GenerateRecommendationButton from '../HomePage/GenerateRecommendationButton';

const theme = createTheme();

export default function UserDashboardPage() {
	const { user } = useContext(AuthContext);
	const [userDestinations, setUserDestinations] = useState([]);
	const description = `Hello, ${user.f_name}`

	useEffect(() => {
		async function getUserDestinations() {
			// loop through user object's destionations and add them to userDestinations
			for (const destination of user.destinations) {
				const response = await fetch(`http://localhost:3001/destinations/destinationId/${destination}`, {
					method: 'GET',
					mode: 'cors'
				});
				// set userDestinations
				const responseJson = await response.json();
				setUserDestinations(prevState => [...prevState, responseJson[0]])
			}
		}
		getUserDestinations();
	}, [user])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>
				<HeroUnit title={"User Dashboard"} description={description} />
				<Album destinations={userDestinations} hasActions={true} />
				<GenerateRecommendationButton text={"Generate another recommendation"} />
			</main>
			<Footer />
		</ThemeProvider>
	);
}