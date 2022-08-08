import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

export function CurrentStep({ handleNext, handleBack, storeResponse, question, steps }) {
    if (Object.keys(question).length === 0) {
        return null;
    }
    const handleChange = (event) => {
        let targetResponse = event.target.value;
        let responseNumber = 1;
        for (let r of question.response) {
            if (r === targetResponse) {
                break;
            }
            responseNumber++;
        }
        storeResponse(steps, targetResponse, "" + responseNumber);
    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img style={{ display: "block", marginLeft: 'auto', marginRight: 'auto', width: '50%', }} src={question.image} alt="current question"/>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div style={{ margin: '30px 0 0px' }}>
                        <Typography variant="h4" align="center">
                            {question.question}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{ display: "block", marginLeft: 'auto', marginRight: 'auto' }}>
                    <TextField variant="standard" margin="normal" fullWidth select SelectProps={{ native: true }} label="Response" name="response"
                               onChange={handleChange}>
                        {question.response.map((response, index) => {
                            let itemKey = steps + "-" + index;
                            return <option key={itemKey}>{response}</option>;
                        })}
                    </TextField>
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='contained' sx={{ mt: 3, ml: 1 }} color='primary' disabled={steps === 0} onClick={handleBack}>Back</Button>
                <Button variant='contained' sx={{ mt: 3, ml: 1 }} color='primary' onClick={handleNext}>Next</Button>
            </Box>
        </div>);
}

CurrentStep.defaultProps = {
    question: {}
}