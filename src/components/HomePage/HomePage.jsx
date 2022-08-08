import * as React from 'react';
import Footer from "../CommonComponents/Footer";
import Album from '../CommonComponents/Album';
import ProductSmokingHero from './ProductSmokingHero';
import { ImageHeroUnit } from '../CommonComponents/ImageHeroUnit';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import Typography from '../CommonComponents/Typography';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const homePageDestinations = [
  {
    city: "Vancouver",
    country: "Canada",
    image: "https://source.unsplash.com/Yc9h5SJdEzI",
    destinationId: "1"
  },
  {
    city: "Tokyo",
    country: "Japan",
    image: "https://source.unsplash.com/4HG5hlhmZg8",
    destinationId: "2"
  },
  {
    city: "London",
    country: "England",
    image: "https://source.unsplash.com/iXqTqC-f6jI",
    destinationId: "3"
  }
];

const backgroundImage =
  'https://source.unsplash.com/OnXvKZldSJ0';

export default function LandingPage() {
  const nav = useNavigate();

	const userObject = useSelector((state) => state.userReducer.currUser);

	React.useEffect(() => {
		if (userObject._id && userObject.question_responses === undefined) {
		  nav("/QuestionsStepperPage");
		};
	  }, [nav, userObject.question_responses, userObject]);

  return (
    <React.Fragment>
      <main>
      <ImageHeroUnit 
        backgroundImage={backgroundImage}
        header="Youfly"
        description="Find your next vacation using our personalized recommendation algorithm"
        buttonDescription="Find Vacation"
        linkTo="/DestinationRecommendationPage"
        smallText="Discover the experience"
        breakpoint="sm"
      />
      <ProductValues />
      <Typography variant="h3" marked="center" align="center" component="h2" marginTop={5} marginBottom={5}>
        For all types of travelers
      </Typography>
      <Album userDestinations={homePageDestinations} hasActions={false} />
      <ProductHowItWorks />
      <ProductSmokingHero />
      </main>
      <Footer />
    </React.Fragment>
  );
}