import Footer from "../CommonComponents/Footer";
import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { HeroUnit } from '../CommonComponents/HeroUnit';
import { PasswordSection } from './PasswordSection';
import { AccountSection } from './AccountSection';
import { QuestionnairePage } from '../QuestionnairePage/QuestionnairePage';
import CustomizedSnackbar from "../CommonComponents/CustomizedSnackbar";
import { useDispatch } from 'react-redux';
import { editUserAsync } from '../../redux/thunks/userThunks';

export default function AccountSettingsPage() {
	const dispatch = useDispatch();
	const [backdropOpen, setBackdropOpen] = useState(true);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [severity, setSeverity] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		setTimeout(() => {  setBackdropOpen(false); }, 500);
	}, [])

	const save = (id, updatedObject) => {
		dispatch(editUserAsync({id: id, toBeUpdated: updatedObject}))
		setSnackbarOpen(true)
		// set other snackbar stuff here
	}

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
				<AccountSection save={save} />
				<PasswordSection save={save} />
				<QuestionnairePage save={save} />
			</main>
			<Footer />
			<CustomizedSnackbar open={snackbarOpen} setOpen={setSnackbarOpen} severity={severity} message={message} />
		</React.Fragment>
	);
}
