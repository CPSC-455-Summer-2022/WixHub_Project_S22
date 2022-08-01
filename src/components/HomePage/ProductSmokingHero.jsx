import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../CommonComponents/Typography';
import { Link } from "react-router-dom";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button component={Link} to="/DestinationRecommendationPage"
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Want to find your next vacation?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Join us and discover the experience!
      </Typography>
		<AirplaneTicketIcon fontSize='large'/>
    </Container>
  );
}

export default ProductSmokingHero;