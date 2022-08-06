import { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';

export const AccountSection = (props) => {
  const userObject = useSelector((state) => state.userReducer.currUser);	

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: ""
  }, [userObject]);

  useEffect(() => {
	setValues({
		firstName: userObject.f_name,
		lastName: userObject.l_name,
		email: userObject.email,
		country: userObject.country
	})
  }, [userObject])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
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
		noValidate
		{...props}
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