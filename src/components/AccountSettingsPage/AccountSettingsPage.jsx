import Footer from "../CommonComponents/Footer";
import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { HeroUnit } from '../CommonComponents/HeroUnit';
import { PasswordSection } from './PasswordSection';
import { AccountSection } from './AccountSection';
import { QuestionnairePage } from '../QuestionnairePage/QuestionnairePage';
import CustomizedSnackbar from "../CommonComponents/CustomizedSnackbar";

export default function AccountSettingsPage() {
	const [backdropOpen, setBackdropOpen] = useState(true)
	const [snackbarOpen, setSnackbarOpen] = React.useState(false);

	useEffect(() => {
		setTimeout(() => {  setBackdropOpen(false); }, 500);
	}, [])

	return (
		<React.Fragment>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={backdropOpen}
      		>
        		<CircularProgress color="inherit" />
      		</Backdrop>
			<main>
				<HeroUnit title="Account" />
				<AccountSection setSnackbarOpen={setSnackbarOpen} />
				<PasswordSection setSnackbarOpen={setSnackbarOpen} />
				<QuestionnairePage setSnackbarOpen={setSnackbarOpen} />
			</main>
			<Footer />
			<CustomizedSnackbar open={snackbarOpen} setOpen={setSnackbarOpen} />
		</React.Fragment>
	);
}
