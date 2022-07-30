import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import React from 'react';

export default function GenerateRecommendationButton() {

	return (
		<Stack
			sx={{ pt: 4 }}
			direction="row"
			spacing={2}
			justifyContent="center"
		  >
      <Button component={Link} to="DestinationSuggestionPage" variant="contained">Generate my recommendation now!</Button>
		  </Stack>
	);
}