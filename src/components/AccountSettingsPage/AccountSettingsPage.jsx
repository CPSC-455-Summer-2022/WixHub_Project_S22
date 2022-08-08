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
import { resetEditUserStatus } from "../../redux/reducers/user";

export default function AccountSettingsPage() {
	const dispatch = useDispatch();
	const [backdropOpen, setBackdropOpen] = useState(true);
	const [severity, setSeverity] = useState("");
	const [message, setMessage] = useState("");
	const userStoreState = useSelector(state => state.userReducer)
	const [snackbarOpen, setSnackbarOpen] = useState(false);

	useEffect(() => {
		dispatch(resetEditUserStatus())
		setTimeout(() => {  setBackdropOpen(false); }, 500);
	}, [dispatch])

	const save = (id, updatedObject, message) => {
		dispatch(editUserAsync({id: id, toBeUpdated: updatedObject}))
		setMessage(message)
	}

	// Switch on async function result in the store
	useEffect(() => {
		switch(userStoreState.editUser) {
			case REQUEST_STATE.FULFILLED:
				setSeverity("success")
				setSnackbarOpen(true)

				// Clear async function status
				dispatch(resetEditUserStatus())
				break;
			case REQUEST_STATE.REJECTED:
				setSeverity("error")
				setMessage(userStoreState.error.message)
				setSnackbarOpen(true)

				// Clear async function status
				dispatch(resetEditUserStatus())
				break;
			default:
				break;
		}
	}, [userStoreState.editUser, userStoreState.error, dispatch])

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
