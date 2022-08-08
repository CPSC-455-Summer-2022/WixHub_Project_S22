import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Box, Button, Container } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export function Success(values, save, id) {
    const saveResponse = () => {
        const updatedObject = {
            question_responses: {}
        }

        for (let count = 1; count <= 8; count++) {
            let question = values.values["question" + count].question;
            updatedObject.question_responses[question] = values.values.responses[count];
        }

        console.log(save);
        console.log(values);
        console.log(updatedObject);
        console.log(values.id);

        values.save(values.id, updatedObject, "questions updated!")
    }

    saveResponse();

    return (<Box
        component="main"
        sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
            marginTop: 15
        }}
    >
        <Container maxWidth="lg">
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <img alt="success" style={{ display: "block", marginLeft: 'auto', marginRight: 'auto', width: '50%' }} src='https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                <br />
                <br />
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="h2"
                >
                    Success!!
                </Typography>
                <br />
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="h5"
                >
                    You've completed your profile and are ready to get some destination recommendations ✈️
                </Typography>
                <Button
                    startIcon={(<ArrowBackIcon fontSize="small" />)}
                    sx={{ mt: 3 }}
                    variant="contained"
                    component={Link}
                    to="/UserDashboardPage"
                >
                    Go to UserDashboard
                </Button>
            </Box>
        </Container>
    </Box>)
}