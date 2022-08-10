import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Container } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export function Success(values, save, id) {
    useEffect(() => {
        const saveResponse = () => {
            const updatedObject = {
                question_responses: {}
            }

            for (let count = 1; count <= 8; count++) {
                let question = values.values["question" + count].question;
                updatedObject.question_responses[question] = values.values.responses[count];
            }

            values.save(values.id, updatedObject, "questions updated!")
        }
        saveResponse();
    }, [values]);

    return (
        <Box
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
                    <img alt="success" style={{ display: "block", marginLeft: 'auto', marginRight: 'auto', width: '50%' }} src='https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDM4NzI5NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' />
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
        </Box>
    )
};