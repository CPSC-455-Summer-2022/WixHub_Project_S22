import Footer from "../CommonComponents/Footer";
import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { HeroUnit } from '../CommonComponents/HeroUnit';
import { PasswordSection } from './PasswordSection';
import { AccountSection } from './AccountSection';

export default function AccountSettingsPage() {
	const [open, setOpen] = useState(true)

	useEffect(() => {
		setTimeout(() => {  setOpen(false); }, 500);
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
				<HeroUnit title="Account" />
				<AccountSection />
				<PasswordSection />
			</main>
			<Footer />
		</React.Fragment>
	);
}



