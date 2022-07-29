import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function GenerateRecommendation() {
	return (
		<Stack
			sx={{ pt: 4 }}
			direction="row"
			spacing={2}
			justifyContent="center"
		  >
      <Button variant="contained">Generate my recommendation now!</Button>
		  </Stack>
	);
}