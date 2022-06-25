import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "../CommonComponents/Copyright";
import Footer from "../CommonComponents/Footer";

export function HeroUnit(props) {
	return (
		<Box
		sx={{
		  bgcolor: 'background.paper',
		  pt: 8,
		  pb: 6,
		}}
	  >
		<Container maxWidth="sm">
		  <Typography
			component="h1"
			variant="h2"
			align="center"
			color="text.primary"
			gutterBottom
		  >
			{props.title}
		  </Typography>
		  <Typography variant="h5" align="center" color="text.secondary" paragraph>
			{props.description}
		  </Typography>
		  <Stack
			sx={{ pt: 4 }}
			direction="row"
			spacing={2}
			justifyContent="center"
		  >
			<Button variant="contained">Main call to action</Button>
			<Button variant="outlined">Secondary action</Button>
		  </Stack>
		</Container>
	  </Box>
	)
}







