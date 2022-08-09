import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useDispatch, useSelector } from 'react-redux';
import { loginUserAsync } from '../../redux/thunks/userThunks';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import userService from '../../services/userService'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { REQUEST_STATE } from "../../redux/utils";
import { resetLoginUserStatus } from "../../redux/reducers/user";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://blogs.ubc.ca/cpsc4552022s/">
        YouFly
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const context = React.useContext(AuthContext);
  const userObject = useSelector(state => state.userReducer.currUser);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = React.useState(false);
  const userStoreState = useSelector(state => state.userReducer)

  React.useEffect(() => {
    if (userObject._id !== undefined) {
      nav("/UserDashboardPage");
    };
  }, [nav, userObject._id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
      userService.addUser({
      f_name: data.get('firstName'),
      l_name: data.get('lastName'),
      country: data.get('country'),
      email: data.get('email'),
      password: data.get('password'),
      }).catch((err) => setError(true)).then(() => {
        dispatch(loginUserAsync({
          email: data.get('email'),
          password: data.get('password'),
        }));
      });
  };

  React.useEffect(() => {
    switch (userStoreState.loginUser) {
      case REQUEST_STATE.FULFILLED:
        const userData = userStoreState.loginUserPayload;
        context.login(userData);
        nav("/QuestionsStepperPage");

        dispatch(resetLoginUserStatus())
        break;
      case REQUEST_STATE.REJECTED:
        setError(true);

        dispatch(resetLoginUserStatus())
        break;
      default:
        break;
    }
  }, [userStoreState.loginUser, userStoreState.error, context, nav, userStoreState.loginUserPayload, dispatch]);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  return (
    <Container component="main" maxWidth="xs">
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
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
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
              <Link href="LoginPage" variant="body2">
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
          <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              Email already in use! Please try logging in or use a different email.
            </Alert>
          </Snackbar>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}