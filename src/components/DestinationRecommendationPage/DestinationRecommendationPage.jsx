import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import questionService from "../../services/questionService";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const DestinationRecommendationPage = () => {
	const [open, setOpen] = useState(true)
    const [recommendedDestination, setRecommendedDestination] = useState({})
    const userObject = useSelector(state => state.userReducer.currUser)
    const navigate = useNavigate();

    useEffect(() => {
        let isSubscribed = true // Prevent duplicate calls

        async function setupDestinationRecommendationPage() {
            const questionsAndAnswers = 
            {
                id: userObject._id
            }
            
            for (const [key, value] of Object.entries(userObject.question_responses)) {
                questionsAndAnswers[key] = value
            }

            const destinationJsonResponse = await questionService.recommendationGenerator(questionsAndAnswers);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Makes our generator seem like it's doing some hefty work ;)

            if (isSubscribed) {
                setRecommendedDestination(destinationJsonResponse);
                setOpen(false);
            }
        }
        setupDestinationRecommendationPage();

        return () => isSubscribed = false; 
	}, [userObject])
    
    useEffect(() => {
        if (!open) {
            navigate("/DestinationPage", {state: {
                destination: recommendedDestination
            }})
        }
    }, [open, navigate, recommendedDestination])

    return (
        <React.Fragment>
            <Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={open}
      		>
                <Box
            component="main"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1,
                minHeight: '100%',
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
                    <Typography
                        align="center"
                        color="textPrimary"
                        variant="h1"
                    >
                        Sit tight just a minute
                    </Typography>
                    <CircularProgress color="inherit" />
                    </Box>
                </Container>
            </Box>
      		</Backdrop>
        </React.Fragment>
    );
}