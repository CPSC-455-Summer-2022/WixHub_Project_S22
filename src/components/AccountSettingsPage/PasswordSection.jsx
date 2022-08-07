import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { editUserAsync } from '../../redux/thunks/userThunks';

export const PasswordSection = (props) => {
  const userObject = useSelector((state) => state.userReducer.currUser);
  const dispatch = useDispatch();
  const [error, setError] = useState(false)

  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
	setError(false)
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const save = (event) => {
	// prevent default page reload
	event.preventDefault()

	if (values.password !== values.confirm) {
		setError(true)
		return
	}
	const updatedObject = {
		password: values.password
	}

	dispatch(editUserAsync({id: userObject._id, toBeUpdated: updatedObject}))
	setValues({
		password: '',
		confirm: ''
	})

	props.setSnackbarOpen(true)
}

  return (
	<Container maxWidth="lg">
		<Box marginBottom={5} sx={{ pt: 3 }}>
			<form onSubmit={(event) => save(event)}>
			<Card raised>
				<CardHeader
				subheader="Update password"
				title="Password"
				/>
				<Divider />
				<CardContent>
					<TextField
						required
						error={error}
						helperText={error ? "Passwords do not match" : ""}
						fullWidth
						label="Password"
						margin="normal"
						name="password"
						onChange={handleChange}
						type="password"
						value={values.password}
						variant="outlined"
					/>
					<TextField
						required
						error={error}
						helperText={error ? "Passwords do not match" : ""}
						fullWidth
						label="Confirm password"
						margin="normal"
						name="confirm"
						onChange={handleChange}
						type="password"
						value={values.confirm}
						variant="outlined"
					/>
				</CardContent>
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
		</Box>
	</Container>
  );
};