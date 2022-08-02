import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import React from 'react';
import Typography from '../CommonComponents/Typography';

export default function GenerateRecommendationButton(props) {

	return (
		<Stack
			sx={{ pt: 4 }}
			direction="row"
			spacing={2}
			justifyContent="center"
		  >
      <Button component={Link} to="/DestinationRecommendationPage"
	  sx={{
		border: '4px solid currentColor',
		borderRadius: 0,
		height: 'auto',
		py: 1,
		px: 4,
	  }}
	  >
	  <Typography component="span">
		{props.text}
        </Typography>
		</Button>
		  </Stack>
	);
}

// Note: "/" makes an absolute path, without the "/" it is a relative link to