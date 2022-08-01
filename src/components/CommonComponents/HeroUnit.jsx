import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export function HeroUnit(props) {
	return (
		<Box
		sx={{
		  bgcolor: 'background.paper',
		  pt: 8,
		  pb: 6,
		}}
	  >
		<Container maxWidth="lg">
		  <Typography
			component="h1"
			variant="h3"
			align="left"
			color="text.primary"
			gutterBottom
		  >
			{props.title}
		  </Typography>
		  <Typography variant="h5" align="left" color="text.secondary" paragraph >
			{props.description}
		  </Typography>
		</Container>
	  </Box>
	)
}







