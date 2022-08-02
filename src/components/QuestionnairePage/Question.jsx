import { TextField } from '@mui/material';
import React from "react"

export const Question = (props) => {
	return (
				
		<TextField
		fullWidth
		label="Select State"
		name="state"
		onChange={props.handleChange()}
		required
		select
		SelectProps={{ native: true }}
		// value={values.state}
		variant="outlined"
	>
		{/* {states.map((option) => (
		<option
			key={option.value}
			value={option.value}
		>
			{option.label}
		</option>
		))} */}
	</TextField>
	);
}