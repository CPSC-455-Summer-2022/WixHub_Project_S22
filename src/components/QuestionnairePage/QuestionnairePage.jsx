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
import { useSelector } from 'react-redux';

export const QuestionnairePage = (props) => {
	const [questions, setQuestions] = useState([]);
	const [values, setValues] = useState({});
	const [disabled, setDisabled] = useState(true);
	const userObject = useSelector((state) => state.userReducer.currUser);
	
	useEffect(() => {
		let isSubscribed = true // Prevent duplicate calls

		async function getQuestions() {
			const questionJson = await questionService.getQuestions()
			if (isSubscribed) {
				setQuestions(questionJson)
				const values = Object.fromEntries(questionJson.map(obj => {
					const currQuestion = obj.question
					const existingUserResponses = userObject.question_responses
					return [currQuestion, {
						response: existingUserResponses ? existingUserResponses[currQuestion].response : "",
						responseNumber: existingUserResponses ? existingUserResponses[currQuestion].responseNumber : ""
					}]
				}));
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
		
		props.save(userObject._id, updatedObject, "questions updated!")
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





