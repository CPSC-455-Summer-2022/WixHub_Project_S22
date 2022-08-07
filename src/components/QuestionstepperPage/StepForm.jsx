import React, {useContext, useState,useEffect} from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import {Box, Button, Container, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import questionService from "../../services/questionService";
import Grid from "@mui/material/Grid";


// Step titles
const labels = ['1','2','3','4','5', '6']
const handleSteps = (step: number, handleNext, handleBack, questions) => {
    switch (step) {
        case 0:
            return <FirstStep handleNext = {handleNext} handleBack = {handleBack} questions={questions}/>
        case 1:
            return <FirstStep handleNext = {handleNext} handleBack = {handleBack} questions={questions}/>
        case 2:
            return <FirstStep handleNext = {handleNext} handleBack = {handleBack} questions={questions}/>
        case 3:
            return <FirstStep handleNext = {handleNext} handleBack = {handleBack} questions={questions}/>
        case 4:
            return <FirstStep handleNext = {handleNext} handleBack = {handleBack} questions={questions}/>
        case 5:
            return <FirstStep handleNext = {handleNext} handleBack = {handleBack} questions={questions}/>
        default:
            throw new Error('Unknown step')
    }
}

function Success() {
    return <h1>success</h1>;
}

function FirstStep({handleNext, handleBack, questions}) {
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img style={{display: "block", marginLeft: 'auto', marginRight: 'auto', width: '50%'}} src='https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80'/>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div style={{ margin: '30px 0 0px' }}>
                        <Typography variant="h4" align="center">
                            What type of traveller are you?
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{display: "block", marginLeft: 'auto', marginRight: 'auto'}}>
                    <TextField variant="standard" margin="normal" fullWidth select SelectProps={{native: true}} label="Response" name="response">
                        <option value=""></option>
                        <option value="1">I like to go with the flow</option>
                        <option value="2">I plan everything</option>
                        <option value="3">I just want to relax</option>
                        <option value="4">I want to do everything</option>
                    </TextField>
                </Grid>
            </Grid>

             <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant='contained' sx = {{mt: 3, ml: 1}} color='primary' onClick={handleNext}>Next</Button>
            </Box>
        </div>);
}

function SecondStep({handleNext, handleBack}) {
    return(<div>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant='contained' sx = {{mt: 3, ml: 1}} color='primary' onClick={handleNext}>Next</Button>
        </Box>
    </div>);
}

const StepForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [questions, setQuestions] = useState([]);
    // Proceed to next step
    const handleNext = () => setActiveStep((prev) => prev + 1);
    // Go back to prev step
    const handleBack = () => setActiveStep((prev) => prev - 1);

    useEffect(() => {
        let isSubscribed = true // Prevent duplicate calls

        async function getQuestions() {
            const questionJson = await questionService.getQuestions();
            setQuestions(questionJson)
            console.log(questions)
        }
        getQuestions();
    }, [])

    return (
        <>
            <Container maxWidth="md" sx = {{mb : 4}}>
                <Paper variant="outlined" sx={{ my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
            {activeStep === labels.length ? (
                <Success />
            ) : (
                <>
                    {/*<div style={{ margin: '30px 0 50px' }}>*/}
                    {/*    <Typography variant="h4" align="center">*/}
                    {/*        Multi Step Form*/}
                    {/*    </Typography>*/}
                    {/*    <Typography*/}
                    {/*        variant="subtitle2"*/}
                    {/*        align="center"*/}
                    {/*        style={{ margin: '10px 0' }}*/}
                    {/*    >*/}
                    {/*        React Material UI multi step form with basic form validation*/}
                    {/*        logic.*/}
                    {/*    </Typography>*/}
                    {/*</div>*/}
                    <Stepper
                        activeStep={activeStep}
                        style={{ margin: '30px 0 15px' }}
                        alternativeLabel
                    >
                        {labels.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {handleSteps(activeStep, handleNext, handleBack, questions)}
                </>
            )}</Paper></Container>
        </>
    )
}

export default StepForm
