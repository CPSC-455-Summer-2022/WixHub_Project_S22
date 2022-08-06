import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Container
} from '@mui/material';
import { Question} from "./Question";
import questionService from '../../services/questionService';
import { useSelector, useDispatch } from 'react-redux';
import { editUserAsync } from '../../redux/thunks/userThunks';

export const QuestionnairePage = (props) => {
	const [questions, setQuestions] = useState([]);
	const [values, setValues] = useState({});
	const [disabled, setDisabled] = useState(true);
	const userObject = useSelector((state) => state.userReducer.currUser);
	const dispatch = useDispatch();
	
	useEffect(() => {
		let isSubscribed = true // Prevent duplicate calls

		async function getQuestions() {
			const questionJson = await questionService.getQuestions()
			if (isSubscribed) {
				setQuestions(questionJson)
				const values = Object.fromEntries(questionJson.map(obj => {
					const currQuestion = obj.question 
					return [currQuestion, {
						response: userObject.question_responses[currQuestion].response,
						responseNumber: userObject.question_responses[currQuestion].responseNumber
					}]
				})); //!!!TODO Check back once josh pushes changes to db model
				setValues(values)
			}
		}
		getQuestions();

		return () => isSubscribed = false; 
	}, [userObject])

	useEffect(() => {
		let disabled = false
		for (const val of Object.values(values)) {
			if (val === null) {
				disabled=true
			}
		}
		setDisabled(disabled)
	}, [values])

	const handleSelection = (currQuestion, option) => {
		setValues({
			...values,
			[currQuestion]: {
				response: option.response,
				responseNumber: option.responseNumber
		}});
	}

	const save = () => {
		const updatedObject = {
			question_responses: {}
		}

		for (const [key, value] of Object.entries(values)) {
			updatedObject.question_responses[key] = value
		}

		dispatch(editUserAsync({id: userObject._id, toBeUpdated: updatedObject}))
		// !!!TODO: show changes saved modal by calling setShow function from props
		props.setSnackbarOpen(true)
	}

return (
	<Container maxWidth="lg">
		<Box marginY={5} sx={{ pt: 3 }}>
			<Card raised>
				<CardHeader
				subheader="Questions for personalized reccommendations"
				title="Questions"
				/>
				<Divider />
				<CardContent>
					{questions.map((question) => (
					<Question key={question._id} question={question} handleSelection={handleSelection} values={values} />))}
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
						onClick={() => save()}
						disabled={disabled}
						color="primary"
						variant="contained"
					>
						Save
					</Button>
				</Box>
			</Card>
		</Box>
	</Container>
	);
}





