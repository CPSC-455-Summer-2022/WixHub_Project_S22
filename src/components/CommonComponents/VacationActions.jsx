import * as React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
// import userService from "../../redux/services/userService";

export default function VacationActions(props) {
	
	const deleteCard = () => {
		props.setUserDestinations(prevState => [...prevState].filter(x => x._id !== props.cardId))
		// !!!TODO: userService.editUser(remove the user's destination id). Just editing the redux store should update the list in the Album component
	}
	
	return (
		<CardActions>
			<Button onClick={() => {
				deleteCard()
			}} size="small">Delete</Button>
	  	</CardActions>
	);
}