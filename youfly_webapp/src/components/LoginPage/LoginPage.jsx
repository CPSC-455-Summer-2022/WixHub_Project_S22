// import React, {useState} from "react";
// import {Avatar, Box, Button, Grid, Paper, Tab, Tabs, TextField, Typography} from "@material-ui/core";
// import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
// import {LockOutlined} from "@material-ui/icons";
// import {Link} from "react-router-dom";

// export const LoginVsSignup = () => {

//     // login part for the mini login vs. signup tile
//     const login = () => {
//         const paperStyle={padding:20,height:'400px',width:300, margin:"0 auto"}
//         const avatarStyle={backgroundColor:'#FFAFCC'}
//         return(
//             <Grid>
//                 <Paper style={paperStyle}>
//                     <Grid align='center'>
//                         <Avatar style={avatarStyle}><LockOutlined/></Avatar>
//                         <h2>Sign in</h2>
//                     </Grid>
//                     <TextField label='Username' placeholder='Please enter the username' fullWidth required/>
//                     <TextField label='Password' placeholder='Please enter the password' type='password' fullWidth required/>
//                     <Button type='submit' color={'#CDB4DB'} variant="contained" fullWidth>Sign in</Button>
//                     <Typography> Don't have an account ?
//                         <Link to="/">
//                             Sign up now
//                         </Link>
//                     </Typography>
//                 </Paper>
//             </Grid>
//         )
//     }

//     // sign up part for the mini login vs. signup tile
//     const signup = () => {
//         const paperStyle={padding: 20, width: 300, margin:"0 auto"}
//         const headerStyle={margin: 0}
//         const avatarStyle={backgroundColor:'#FFAFCC'}
//         return (
//             <Grid>
//                 <Paper style={{paperStyle}}>
//                     <Grid align='center'>
//                         <Avatar style={avatarStyle}>
//                             <AddCircleOutlineOutlinedIcon/>
//                         </Avatar>
//                         <h2 style={headerStyle}>Sing Up</h2>
//                         <Typography variant='caption'>Please fill this form to create an account</Typography>
//                     </Grid>
//                     <form>
//                         <TextField fullWidth label='Name' placeholder='Please enter your name' required/>
//                         <TextField fullWidth label='Email' placeholder='Please enter your email' required/>
//                         <TextField fullWidth label='Phone' placeholder='Please enter phone number' required/>
//                         <TextField fullWidth label='Address' placeholder='Please enter your address' required/>
//                         <TextField fullWidth label='Password' placeholder='Please enter your password' required/>
//                         <TextField fullWidth label='Confirm Password' placeholder='confirm your password' required/>
//                         <Button type='submit' variant='contained' color={'#CDB4DB'}>Sign up</Button>
//                     </form>
//                 </Paper>
//             </Grid>
//         );
//     }

//     // mini login vs. signup tile
//     const [value,setValue]=useState(0)
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     }

//     function TabPanel(props) {
//         const { children, value, index, ...other } = props;

//         return (
//             <div
//                 role="tabpanel"
//                 hidden={value !== index}
//                 id={`simple-tabpanel-${index}`}
//                 aria-labelledby={`simple-tab-${index}`}
//                 {...other}
//             >
//                 {value === index && (
//                     <Box>
//                         <Typography>{children}</Typography>
//                     </Box>
//                 )}
//             </div>
//         );
//     }

//     const loginSignupPaperStyle = {width:340, margin:"20px auto"}

//     return(
//         <div>
//             <Paper elevation={20} style={loginSignupPaperStyle}>
//                 <Tabs
//                     value={value}
//                     indicatorColor="primary"
//                     textColor="primary"
//                     onChange={handleChange}
//                     aria-label="disabled tabs example"
//                 >
//                     <Tab label="Login" />
//                     <Tab label="Sign up" />
//                 </Tabs>
//                 <TabPanel value={value} index={0}>
//                     {login()}
//                 </TabPanel>
//                 <TabPanel value={value} index={1}>
//                     {signup()}
//                 </TabPanel>
//             </Paper>
//         </div>

//     )
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "../CommonComponents/Copyright";

const theme = createTheme();

export default function SignInSide() {
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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}