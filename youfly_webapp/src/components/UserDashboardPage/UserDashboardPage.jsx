import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../CommonComponents/Footer";
import { HeroUnit } from '../CommonComponents/HeroUnit';
import Album from '../CommonComponents/Album';
import { useSelector } from 'react-redux';
import AccountSettings from './AccountSettings';

const theme = createTheme();

const description = "Find your Suggestion History and Account Settings here"

export default function UserDashboardPage() {
	const cards = useSelector(state => state.cards);

	return (
		<ThemeProvider theme={theme}>
		<CssBaseline />
		<main>
			<HeroUnit title={"User Dashboard"} description={description} />
			<Album cards={cards} hasActions={true} />
			<AccountSettings />
		</main>
		<Footer />
		</ThemeProvider>
	);
}