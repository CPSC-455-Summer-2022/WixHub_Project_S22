import * as React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserDestinationAsync } from '../../redux/thunks/userThunks';

export default function VacationActions(props) {
	const dispatch = useDispatch();
	const userObject = useSelector(state => state.userReducer.currUser);

	const deleteCard = () => {
		dispatch(deleteUserDestinationAsync({id: userObject._id, toBeDeleted: props.destinationId}))
	}
	
	return (
		<CardActions>
			<Button onClick={() => {
				deleteCard()
			}} size="small">Delete</Button>
	  	</CardActions>
	);
}