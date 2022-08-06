import React, { useState, } from "react"
import {
	InputLabel,
	Select,
	MenuItem,
	FormControl
} from "@mui/material";
import { useEffect } from "react";

export const Question = (props) => {
	const [question, setQuestion] = useState("")

	useEffect(() => {
		setQuestion(props.question.question)
	}, [props.question.question])

	return (
		<FormControl fullWidth margin='normal'>
			<InputLabel id={question}>{question}</InputLabel>
			<Select
				labelId={question}
				id={question}
				label={question}
				name={question}
				value={props.values[question] ? props.values[question].response : ""}
			>	
				{props.question ? props.question.destinationMapping.map((option) => (
					<MenuItem onClick={() => props.handleSelection(question, option)} key={option.responseNumber} value={option.response}>{option.response}</MenuItem>
				)) : null}
			</Select>
		</FormControl>
	);
}