import React, { useEffect, useState, useContext } from 'react';
import Footer from "../CommonComponents/Footer";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ImageHeroUnit } from '../CommonComponents/ImageHeroUnit';
import { AuthContext } from '../../context/auth';
import questionService from "../../redux/services/questionService";

export const DestinationRecommendationPage = () => {
	const [open, setOpen] = useState(true)
    const [recommendedDestination, setRecommendedDestination] = useState({})
    const { user } = useContext(AuthContext);

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

    return (
        <React.Fragment>
            <Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={open}
      		>
        		<CircularProgress color="inherit" />
      		</Backdrop>
            <main>
                <ImageHeroUnit
                // !!!TODO: Make sure to de-reference the correct properties after Kevin is done adding to db model
                    backgroundImage={recommendedDestination.image}
                    header={`${recommendedDestination.city}, ${recommendedDestination.country}`}
                    description={recommendedDestination.description}
                    hasStartIcon
                    linkTo="/UserDashboardPage"
                    buttonDescription="Back to Dashboard"
                    smallText=""
                />
            </main>
            <Footer />
        </React.Fragment>
    );
}