import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';
import { useSelector, useDispatch } from 'react-redux';
import AccountSettings from './AccountSettings';
import { useEffect, useState } from "react";
import { getUserAsync } from "../../redux/thunks/userThunks";

// TODO: delete this temporary "logged in" user after sherman sets up login
const loggedInId = "62d30382d0409585841c1419";

const theme = createTheme();

const description = "Find your Suggestion History and Account Settings here"

export default function UserDashboardPage() {
	const [userDestinations, setUserDestinations] = useState([]);
	const dispatch = useDispatch();
	const user = useSelector(state => state.userReducer.list[0]);

	// get user
	useEffect(() => {
		dispatch(getUserAsync(loggedInId));
	}, [dispatch])

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
				<AccountSettings />
			</main>
			<Footer />
		</ThemeProvider>
	);
}