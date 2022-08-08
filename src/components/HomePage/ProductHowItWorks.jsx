import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../CommonComponents/Typography';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 34,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium'
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <FormatListNumberedOutlinedIcon fontSize='large' />
                <Typography variant="h5" align="center">
                  Tell us about yourself through our questionnaire.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <TimelineOutlinedIcon fontSize='large' />
                <Typography variant="h5" align="center">
                  Our advanced algorithm matches you with the optimal vacation destination based on your profile.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <BeachAccessOutlinedIcon fontSize='large' />
                <Typography variant="h5" align="center">
                  Discovery new places, new experiences, new surprises.
                  Your vacations will be matched specifically to your likings!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;