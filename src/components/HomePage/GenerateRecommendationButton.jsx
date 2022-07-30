import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import React from 'react';

export default function GenerateRecommendationButton(props) {

	return (
		<Stack
			sx={{ pt: 4 }}
			direction="row"
			spacing={2}
			justifyContent="center"
		  >
      <Button component={Link} to="/DestinationRecommendationPage" variant="contained">{props.text}</Button>
		  </Stack>
	);
}

// Note: "/" makes an absolute path, without the "/" it is a relative link to