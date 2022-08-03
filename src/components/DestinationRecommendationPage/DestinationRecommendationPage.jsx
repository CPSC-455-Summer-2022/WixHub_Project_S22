import React, { useEffect, useState } from 'react';
import Footer from "../CommonComponents/Footer";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ImageHeroUnit } from '../CommonComponents/ImageHeroUnit';
import questionService from "../../redux/services/questionService";
import destinationService from "../../redux/services/destinationService";

export const DestinationRecommendationPage = () => {
	const [open, setOpen] = useState(true)
    const [recommendedDestination, setRecommendedDestination] = useState({})

    // !!!TODO: Make this pull from redux userObject instead of hardcoded
    const temporaryQuestionAndAnswersObject = {

    }

    useEffect(() => {
        let isSubscribed = true // Prevent duplicate calls

        async function setupDestinationRecommendationPage() {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const idResponseJson = await questionService.recommendationGenerator();
            const destinationJsonResponse = await destinationService.getDestinationByDestinationID(idResponseJson);
            
            if (isSubscribed) {
                setRecommendedDestination(destinationJsonResponse);
            }
            
            setOpen(false);
        }
        setupDestinationRecommendationPage();

        return () => isSubscribed = false; 
	}, [])

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
                    header={recommendedDestination.country}
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