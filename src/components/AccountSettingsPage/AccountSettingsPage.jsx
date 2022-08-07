import Footer from "../CommonComponents/Footer";
import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { HeroUnit } from '../CommonComponents/HeroUnit';
import { PasswordSection } from './PasswordSection';
import { AccountSection } from './AccountSection';
import { QuestionnairePage } from '../QuestionnairePage/QuestionnairePage';
import CustomizedSnackbar from "../CommonComponents/CustomizedSnackbar";
import { useDispatch, useSelector } from 'react-redux';
import { editUserAsync } from '../../redux/thunks/userThunks';
import { REQUEST_STATE } from "../../redux/utils";

export default function AccountSettingsPage() {
	const dispatch = useDispatch();
	const [backdropOpen, setBackdropOpen] = useState(true);
	const [severity, setSeverity] = useState("");
	const [message, setMessage] = useState("");
	const userStoreState = useSelector(state => state.userReducer)
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [buttonClicked, setButtonClicked] = useState(false);

	useEffect(() => {
		setTimeout(() => {  setBackdropOpen(false); }, 500);
	}, [])

	const save = (id, updatedObject, message) => {
		dispatch(editUserAsync({id: id, toBeUpdated: updatedObject}))
		setMessage(message)
		setButtonClicked(true)
	}

	useEffect(() => {
		if (buttonClicked) {
			if (userStoreState.editUser === REQUEST_STATE.FULFILLED) {
				setSeverity("success")
				setSnackbarOpen(true)
				setButtonClicked(false)
			} else if (userStoreState.editUser === REQUEST_STATE.REJECTED) {
				setSeverity("error")
				setMessage(userStoreState.error.message)
				setSnackbarOpen(true)
				setButtonClicked(false)
			}
		}
	}, [userStoreState.editUser, userStoreState.error, buttonClicked])

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
