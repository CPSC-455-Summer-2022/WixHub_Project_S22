import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Copyright from "../CommonComponents/Copyright";
import { AuthContext } from '../../context/auth';
import { loginUserAsync } from '../../redux/thunks/userThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { REQUEST_STATE } from "../../redux/utils";
import { resetLoginUserStatus } from "../../redux/reducers/user";


export default function SignInSide() {
  const dispatch = useDispatch();
  const context = React.useContext(AuthContext);
  const nav = useNavigate();
  const userObject = useSelector(state => state.userReducer.currUser);
  const [error, setError] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(true);
  const userStoreState = useSelector(state => state.userReducer)

  React.useEffect(() => {
    if (userObject._id !== undefined) {
      nav("/UserDashboardPage");
    };
  }, [nav, userObject._id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(loginUserAsync({
      email: data.get('email'),
      password: data.get('password'),
    }));
  };

  React.useEffect(() => {
		switch(userStoreState.loginUser) {
			case REQUEST_STATE.FULFILLED:
				const userData = userStoreState.loginUserPayload;
        context.login(userData);
        nav("/UserDashboardPage");

				dispatch(resetLoginUserStatus())
				break;
			case REQUEST_STATE.REJECTED:
				setError(true);

				dispatch(resetLoginUserStatus())
				break;
			default:
				break;
		}
	}, [userStoreState.loginUser, userStoreState.error, dispatch, context, nav, userStoreState.loginUserPayload]);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  function persistRemember() {
    setRememberMe(!rememberMe);
  }

  React.useEffect(() => {
    localStorage.setItem('persistLogin', rememberMe);
  }, [rememberMe]);

  return (
    <React.Fragment>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80)',
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
              Log In
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
                control={<Checkbox value="false" color="primary" onClick={persistRemember} defaultChecked/>}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="SignUpPage" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  Email/Password Incorrect! Please check your credentials or create account.
                </Alert>
              </Snackbar>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}