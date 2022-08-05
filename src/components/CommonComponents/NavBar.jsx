import { Link } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "../../redux/thunks/userThunks";

export const NavBar = () => {
	const { user, logout } = useContext(AuthContext);
	const dispatch = useDispatch();

	function logOutProcess() {
		logout();
		dispatch(logoutUserAsync());
	};

	const LogInOrOut = user ? <Button onClick={logOutProcess} sx={{ color: 'white', backgroundColor: '#BBDDEE'}} variant="contained" disableElevation>Log Out</Button> : <Button component={Link} to="LoginPage" sx={{ color: 'white', backgroundColor: '#BBDDEE'}} variant="contained" disableElevation>Log In</Button>

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
					{user ? <Button component={Link} to="UserDashboardPage" color='inherit'>User Dashboard</Button> : null}
					{user ? <Button component={Link} to="AccountSettingsPage" color='inherit'>Account</Button> : null}
					{LogInOrOut}
					{/* <Button component={Link} to="SignUpPage" sx={{ color: 'white', backgroundColor: '#BBDDEE'}} variant="contained" disableElevation>Sign up</Button> */}
				</Stack>
			</Toolbar>
		</AppBar>
	);
}