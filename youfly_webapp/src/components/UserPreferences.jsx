import React, {useState} from "react";
import {Avatar, Box, Button, Grid, Paper, Tab, Tabs, TextField, Typography} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import {Link} from "react-router-dom";

export const UserPreferences = () => {

    // sign up part for the mini login vs. signup tile
    const preferences = () => {
        const paperStyle={padding: 20, width: 300, margin:"0 auto", radius: 20}
        const headerStyle={margin: 5}
        return (
            <Grid>
                <Paper style={{paperStyle}}>
                    <Grid align='center'>
                        <h4 style={headerStyle}>Preferences</h4>
                    </Grid>
                    <form>
                        <TextField fullWidth label='Name' placeholder='Please enter your name' required/>
                        <TextField fullWidth label='Email' placeholder='Please enter your email' required/>
                        <TextField fullWidth label='Phone' placeholder='Please enter phone number' required/>
                        <TextField fullWidth label='Address' placeholder='Please enter your address' required/>
                        <TextField fullWidth label='Password' placeholder='Please enter your password' required/>
                        <TextField fullWidth label='Confirm Password' placeholder='confirm your password' required/>
                        <Button type='submit' variant='contained' color={'#CDB4DB'}>Sign up</Button>
                    </form>
                </Paper>
            </Grid>
        );
    }

    const cardStyle = {width:340, margin:"20px auto"}

    return(
        <div>
            <Paper elevation={20} style={cardStyle}>
                {preferences()}
            </Paper>
        </div>

    )
}