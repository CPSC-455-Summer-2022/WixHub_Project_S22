import React, { useContext, useState, useEffect, useRef } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import { Box, Button, Container, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import questionService from "../../services/questionService";
import Grid from "@mui/material/Grid";
import { useSelector } from 'react-redux';


// Step titles
const labels = ['1', '2', '3', '4', '5', '6', '7', '8']
const handleSteps = (step: number, handleNext, handleBack, values) => {
    switch (step) {
        case 0:
            return <FirstStep handleNext={handleNext} handleBack={handleBack} question={values.question1} steps={step} />
        case 1:
            return <FirstStep handleNext={handleNext} handleBack={handleBack} question={values.question2} steps={step} />
        case 2:
            return <FirstStep handleNext={handleNext} handleBack={handleBack} question={values.question3} steps={step} />
        case 3:
            return <FirstStep handleNext={handleNext} handleBack={handleBack} question={values.question4} steps={step} />
        case 4:
            return <FirstStep handleNext={handleNext} handleBack={handleBack} question={values.question5} steps={step} />
        case 5:
            return <FirstStep handleNext={handleNext} handleBack={handleBack} question={values.question6} steps={step} />
        case 6:
            return <FirstStep handleNext={handleNext} handleBack={handleBack} question={values.question7} steps={step} />
        case 7:
            return <FirstStep handleNext={handleNext} handleBack={handleBack} question={values.question8} steps={step} />
        default:
            throw new Error('Unknown step')
    }
}

function Success() {
    return <h1>success</h1>;
}

function FirstStep({ handleNext, handleBack, question, steps }) {
    if (question == undefined) {
        question = {
            question: "What type of traveller are you?",
            image: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80",
            response1: "I like to go with the flow",
            response2: "I plan everything",
            response3: "I just want to relax",
            response4: "I want to do everything"
        };
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img style={{ display: "block", marginLeft: 'auto', marginRight: 'auto', width: '50%', }} src={question.image} />
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
                    <TextField variant="standard" margin="normal" fullWidth select SelectProps={{ native: true }} label="Response" name="response">
                        <option value=""></option>
                        <option value="1">{question.response1}</option>
                        <option value="2">{question.response2}</option>
                        <option value="3">{question.response3}</option>
                        <option value="4">{question.response4}</option>
                    </TextField>
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='contained' sx={{ mt: 3, ml: 1 }} color='primary' disabled={steps == 0} onClick={handleBack}>Back</Button>
                <Button variant='contained' sx={{ mt: 3, ml: 1 }} color='primary' onClick={handleNext}>Next</Button>
            </Box>
        </div>);
}


const StepForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [values, setValues] = useState({});
    const userObject = useSelector((state) => state.userReducer.currUser);
    // Proceed to next step
    const handleNext = () => setActiveStep((prev) => prev + 1);
    // Go back to prev step
    const handleBack = () => setActiveStep((prev) => prev - 1);

    useEffect(() => {
        let isSubscribed = true // Prevent duplicate calls

        async function getQuestions() {
            const questionJson = await questionService.getQuestions()
            if (isSubscribed) {
                setQuestions(questionJson)
                let num = 0
                const values = Object.fromEntries(questionJson.map(obj => {
                    const currQuestion = obj.question
                    const currImage = obj.questionImage
                    const r1 = obj.destinationMapping[0].response
                    const r2 = obj.destinationMapping[1].response
                    const r3 = obj.destinationMapping[2].response
                    const r4 = obj.destinationMapping[3].response
                    num += 1
                    return ["question" + num.toString(), {
                        question: currQuestion,
                        image: currImage,
                        response1: r1,
                        response2: r2,
                        response3: r3,
                        response4: r4
                    }]
                }));
                setValues(values)
            }
        }
        getQuestions();

        return () => isSubscribed = false;
    }, [userObject])

    return (
        <>
            <Container maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    {activeStep === labels.length ? (
                        <Success />
                    ) : (
                        <>
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

                            {handleSteps(activeStep, handleNext, handleBack, values)}
                        </>
                    )}</Paper></Container>
        </>
    )
}

export default StepForm
