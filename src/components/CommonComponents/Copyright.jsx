import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



export default function Copyright() {
	return (
	  <Typography variant="body2" color="text.secondary" align="center">
		{'Copyright © '}
		<Link color="inherit" href="https://blogs.ubc.ca/cpsc4552022s/">
		  Youfly
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }