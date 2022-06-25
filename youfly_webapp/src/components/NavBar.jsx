import { Link } from "react-router-dom";
import "../styling/NavBar.css";
import { AppBar, Button, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import { SvgIcon } from '@material-ui/core';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

function LogoIcon(props) {
	return (
		<SvgIcon {...props}>
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
			width="104.000000pt" height="104.000000pt" viewBox="0 0 104.000000 104.000000"
			preserveAspectRatio="xMidYMid meet">

			<g transform="translate(0.000000,104.000000) scale(0.100000,-0.100000)"
			fill="#000000" stroke="none">
			</g>
			</svg>
		</SvgIcon>
	)
}

export const NavBar = () => {
	return (
		<AppBar position="static" sx={{ bgcolor: "#a2d2ff" }}>
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
					<Button component={Link} to="LoginPage" color='inherit'>User Dashboard</Button>
					<Button component={Link} to="SignUpPage" sx={{ color: 'white', backgroundColor: '#BBDDEE'}} variant="contained" disableElevation>Sign up</Button>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}