import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField, Container } from '@mui/material';

export const PasswordSection = (props) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
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
			<form {...props}>
			<Card raised>
				<CardHeader
				subheader="Update password"
				title="Password"
				/>
				<Divider />
				<CardContent>
					<TextField
						fullWidth
						label="Password"
						margin="normal"
						name="password"
						onChange={handleChange}
						type="password"
						value={values.password}
						variant="outlined"
					/>
					<TextField
						fullWidth
						label="Confirm password"
						margin="normal"
						name="confirm"
						onChange={handleChange}
						type="password"
						value={values.confirm}
						variant="outlined"
					/>
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