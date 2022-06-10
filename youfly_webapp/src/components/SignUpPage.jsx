import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export const SignUpPage = () => {
	const paperStyle={padding:'30px 20px', width: 300, margin:"20px auto"}
	const headerStyle={margin: 0}
	const avatarStyle={backgroundColor:'#FFAFCC'}
	return (
		<Grid>
			<Paper elevation={20} style={{paperStyle}}>
				<Grid align='center'>
					<Avatar style={avatarStyle}>
						<AddCircleOutlineOutlinedIcon/>
					</Avatar>
					<h2 style={headerStyle}>Sing Up</h2>
					<Typography variant='caption'>Please fill this form to create an account</Typography>
				</Grid>
			<form>
				<TextField fullWidth label='Name' placeholder='Please enter your name' required/>
				<TextField fullWidth label='Email' placeholder='Please enter your email' required/>
				<TextField fullWidth label='Phone' placeholder='Please enter phone number' required/>
				<TextField fullWidth label='Address' placeholder='Please enter your address' required/>
				<TextField fullWidth label='Password' placeholder='Please enter your password' required/>
				<TextField fullWidth label='Confirm Password' placeholder='Please confirm your password' required/>
				<Button type='submit' variant='contained' color='#CDB4DB'>Sign up</Button>
			</form>
			</Paper>
		</Grid>
	);
}