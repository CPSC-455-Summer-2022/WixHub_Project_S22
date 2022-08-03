import React, { useEffect, useState, useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from '../../context/auth';
import questionService from "../../redux/services/questionService";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography } from '@mui/material';

export const DestinationRecommendationPage = () => {
	const [open, setOpen] = useState(true)
    const [recommendedDestination, setRecommendedDestination] = useState({})
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        let isSubscribed = true // Prevent duplicate calls

        async function setupDestinationRecommendationPage() {
            // !!!TODO: Make this pull from redux userObject instead of hardcoded
            const temporaryQuestionAndAnswersObject = 
            {
                id: user,
                question1: "1",
                question2: "1",
                question3: "1",
                question4: "1",
                question5: "1",
                question6: "1",
                question7: "1",
                question8: "1",
            }

            await new Promise(resolve => setTimeout(resolve, 2000));
            const destinationJsonResponse = await questionService.recommendationGenerator(temporaryQuestionAndAnswersObject); //!!!TODO: See const definition

            if (isSubscribed) {
                setRecommendedDestination(destinationJsonResponse);
            }

            setOpen(false);
        }
        setupDestinationRecommendationPage();

        return () => isSubscribed = false; 
	}, [user])
    
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