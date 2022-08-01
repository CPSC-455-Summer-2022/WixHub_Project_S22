import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../CommonComponents/Typography';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5} align="center">
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <PersonSearchOutlinedIcon fontSize='large'/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Personalized results
              </Typography>
              <Typography variant="h5">
                {
                  'Get matched with vacation spots based on your personality'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <AutoAwesomeOutlinedIcon fontSize='large'/>
              <Typography variant="h6" sx={{ my: 5 }}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {
                  'From the latest trendy beach in Miami to the iconic Eiffel Tower'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <RemoveRedEyeOutlinedIcon fontSize='large'/>
              <Typography variant="h6" sx={{ my: 5 }}>
                New discoveries
              </Typography>
              <Typography variant="h5">
                {'Discover new places '}
                {'that you will not find anywhere else.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;