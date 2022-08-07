import { Link } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth';
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "../../redux/thunks/userThunks";
import { useSelector } from "react-redux";

import jwtDecode from 'jwt-decode';

export const NavBar = () => {
	const { logout } = useContext(AuthContext);
	const userObject = useSelector(state => state.userReducer.currUser)
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('jwtToken')) {
			const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
		  
			if (decodedToken.exp * 1000 < Date.now()) {
				logOutProcess();
			}
		  } else console.log('No token found')
	}, [dispatch]);

	function logOutProcess() {
		logout();
		dispatch(logoutUserAsync());
	};

	const LogInOrOut = userObject._id ? <Button onClick={logOutProcess} sx={{ color: 'white', backgroundColor: '#BBDDEE'}} variant="contained" disableElevation>Log Out</Button> : <Button component={Link} to="LoginPage" sx={{ color: 'white', backgroundColor: '#BBDDEE'}} variant="contained" disableElevation>Log In</Button>

	return (
		<AppBar position="relative" sx={{ bgcolor: "#a2d2ff" }}>
			<Toolbar>
				<IconButton component={Link} to="/">
					{/* <LogoIcon /> */}
					<AirplaneTicketIcon sx={{ color: 'white'}} />
				</IconButton>
				<Typography variant="h6" component='div' sx={{flexGrow: 1}}>
					YouFly
				</Typography>
				<Stack direction='row' spacing={2}>
					<Button component={Link} to="/" color='inherit'>Home</Button>
					{userObject._id ? <Button component={Link} to="UserDashboardPage" color='inherit'>User Dashboard</Button> : null}
					{userObject._id ? <Button component={Link} to="AccountSettingsPage" color='inherit'>Account</Button> : null}
					{LogInOrOut}
				</Stack>
			</Toolbar>
		</AppBar>
	);
}