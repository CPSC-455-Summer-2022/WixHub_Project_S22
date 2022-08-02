import React, { useEffect, useState } from 'react';
import Picture from '../../assets/Vancouver_Image.jpg'
import Footer from "../CommonComponents/Footer";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const DestinationRecommendationPage = () => {
	const [open, setOpen] = useState(true)

    useEffect(() => {
		setTimeout(() => {  
            setOpen(false);
            // !!!TODO: Call recommendation endpoint here
        }, 2000);
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
                <div id="destination-matching">
                    <h3>
                        Congratulations! You've been matched to:
                    </h3>
                    <h2>
                        Vancouver, Canada
                    </h2>
                    <img src={Picture} width='100px' alt={"Your recommended destination"}></img>
                    <h4>
                        Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse
                        cities. A popular filming location, it’s surrounded by mountains, and also has thriving art, theatre and music scenes.
                        Vancouver Art Gallery is known for its works by regional artists, while the Museum of Anthropology houses preeminent First Nations collections.
                        Retrieved from Google
                    </h4>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
}