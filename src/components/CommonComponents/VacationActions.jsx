import * as React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

export default function VacationActions() {
	return (
		<CardActions>
			<Button size="small">View</Button>
			<Button size="small">Delete</Button>
	  	</CardActions>
	);
}