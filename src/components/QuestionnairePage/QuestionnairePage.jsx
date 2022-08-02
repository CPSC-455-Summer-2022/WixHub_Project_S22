import React, { useState, useEffect, useContext } from 'react';
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
import { AuthContext } from '../../context/auth';
import questionService from '../../redux/services/questionService';


const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

// http://wixhub-server.herokuapp.com/questions

export const QuestionnairePage = (props) => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		let isSubscribed = true // Prevent duplicate calls

		async function getQuestions() {
			const questionJson = await questionService.getQuestions()
			if (isSubscribed) {
				setQuestions(questionJson)
			}
			console.log(questionJson)
		}
		getQuestions();

		return () => isSubscribed = false; 
	})

	const [values, setValues] = useState({
		firstName: 'Ronin',
		lastName: 'Cunningham',
		email: 'ronin@gmail.com',
		phone: '',
		state: 'Alabama',
		country: 'Canada'
	});

	const handleChange = (event) => {
		setValues({
		...values,
		[event.target.name]: event.target.value
		});
	};

	return (
		<Container maxWidth="lg">
			<Box marginBottom={5} sx={{ pt: 3 }}>
			<form
			autoComplete="off"
			noValidate
			{...props}
			>
			<Card raised>
				<CardHeader
				subheader="Questions for personalized reccommendations"
				title="Questions"
				/>
				<Divider />
				<CardContent>
				{questions.map((question) => (
					<Question key={question._id} questionId={question._id} question={question} handleChange={handleChange} />
					))}
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
					color="primary"
					variant="contained"
				>
					Save
				</Button>
				</Box>
			</Card>
			</form>
		</Box>
	</Container>
	);
};