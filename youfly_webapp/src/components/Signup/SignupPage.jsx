// import React from 'react'
// import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
// import {Avatar, Button, Grid, Paper, TextField, Typography} from "@material-ui/core";

// export const SignUpPage = () => {
// 	const paperStyle={padding:'60px 40px', width: 300, margin:"20px auto"}
// 	const headerStyle={margin: 0, backgroundColor:'#FFAFCC'}
// 	const avatarStyle={backgroundColor:'#A2D2FF',}
// 	return (
// 		<Grid>
// 			<Paper elevation={20} style={paperStyle}>
// 				<Grid align='center'>
// 					<Avatar style={avatarStyle}>
// 						<AddCircleOutlineOutlinedIcon/>
// 					</Avatar>
// 					<h2 style={headerStyle}>Sign Up</h2>
// 					<Typography variant='caption'>Please fill this form to create an account</Typography>
// 				</Grid>
// 			<form>
// 				<TextField fullWidth label='Name' placeholder='Please enter your name' required/>
// 				<TextField fullWidth label='Email' placeholder='Please enter your email' required/>
// 				<TextField fullWidth label='Phone' placeholder='Please enter phone number' required/>
// 				<TextField fullWidth label='Address' placeholder='Please enter your address' required/>
// 				<TextField fullWidth label='Password' placeholder='Please enter your password' required/>
// 				<TextField fullWidth label='Confirm Password' placeholder='Please confirm your password' required/>
// 				<Button type='submit' variant='contained' color={'#CDB4DB'}>Sign up</Button>
// 			</form>
// 			</Paper>
// 		</Grid>
// 	);
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container >
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}