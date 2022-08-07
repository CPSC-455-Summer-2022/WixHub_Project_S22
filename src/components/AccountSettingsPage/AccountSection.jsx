import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useState } from 'react';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	TextField,
	Container
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { editUserAsync } from '../../redux/thunks/userThunks';

export const AccountSection = (props) => {
	const userObject = useSelector((state) => state.userReducer.currUser);
	const dispatch = useDispatch();
	const [error, setError] = React.useState(false);

	const [values, setValues] = useState({
		firstName: userObject.f_name,
		lastName: userObject.l_name,
		email: userObject.email,
		country: userObject.country
	}, [userObject]);

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	const save = async (event) => {
		// prevent default page reload
		event.preventDefault()

		const updatedObject = {
			f_name: values.firstName,
			l_name: values.lastName,
			email: values.email,
			country: values.country
		}

		const res = await dispatch(editUserAsync({ id: userObject._id, toBeUpdated: updatedObject }));
		if (res.error) {
			setError(true);
		} else {
			props.setSnackbarOpen(true);
		}
	}

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setError(false);
	};

	return (
		<Container maxWidth="lg">
			<Grid
				item
				lg={8}
				md={6}
				xs={12}
			>
				<form
					autoComplete="off"
					onSubmit={(event) => save(event)}
				>
					<Card raised>
						<CardHeader
							subheader="The information can be edited"
							title="User Info"
						/>
						<Divider />
						<CardContent>
							<Grid
								container
								spacing={3}
							>
								<Grid
									item
									md={6}
									xs={12}
								>
									<TextField
										fullWidth
										helperText="Please specify the first name"
										label="First name"
										name="firstName"
										onChange={handleChange}
										required
										value={values.firstName}
										variant="outlined"
									/>
								</Grid>
								<Grid
									item
									md={6}
									xs={12}
								>
									<TextField
										fullWidth
										label="Last name"
										name="lastName"
										onChange={handleChange}
										required
										value={values.lastName}
										variant="outlined"
									/>
								</Grid>
								<Grid
									item
									md={6}
									xs={12}
								>
									<TextField
										fullWidth
										label="Email Address"
										name="email"
										onChange={handleChange}
										required
										value={values.email}
										variant="outlined"
									/>
								</Grid>
								<Grid
									item
									md={6}
									xs={12}
								>
									<TextField
										fullWidth
										label="Country"
										name="country"
										onChange={handleChange}
										required
										value={values.country}
										variant="outlined"
									/>
								</Grid>
							</Grid>
						</CardContent>
						<Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
							<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
								Email already in use! Please try logging in or use a different email.
							</Alert>
						</Snackbar>
						<Divider />
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'flex-end',
								p: 2
							}}
						>
							<Button
								color="primary"
								variant="contained"
								type="submit"
							>
								Save
							</Button>
						</Box>
					</Card>
				</form>
			</Grid>
		</Container>
	);
};