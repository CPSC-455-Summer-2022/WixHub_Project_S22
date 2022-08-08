import React, { useContext, useState, useEffect, useRef } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import {Box, Button, Container, MenuItem, Select, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import questionService from "../../services/questionService";
import Grid from "@mui/material/Grid";
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";


// Step titles
const labels = ['1', '2', '3', '4', '5', '6', '7', '8']
const handleSteps = (step, handleNext, handleBack, storeResponse, values) => {
    let questionNum = step + 1;
    return <FirstStep handleNext={handleNext} handleBack={handleBack} storeResponse={storeResponse} question={values["question" + questionNum]} steps={step} />;
}

function Success(props) {
    // !!!TODO: Call dispatch here and dispatch values
    // dispatch(props.values)

    return (<Box
        component="main"
        sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
            marginTop: 15
        }}
    >
        <Container maxWidth="lg">
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <img style={{ display: "block", marginLeft: 'auto', marginRight: 'auto', width: '50%' }} src='https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                <br />
                <br />
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="h2"
                >
                    Success!!
                </Typography>
                <br />
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="h5"
                >
                    You've completed your profile and are ready to get some destination recommendations ✈️
                </Typography>
                <Button
                    startIcon={(<ArrowBackIcon fontSize="small" />)}
                    sx={{ mt: 3 }}
                    variant="contained"
                    component={Link}
                    to="/UserDashboardPage"
                >
                    Go to UserDashboard
                </Button>
            </Box>
        </Container>
    </Box>)
}

function FirstStep({ handleNext, handleBack, storeResponse, question, steps }) {
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
        storeResponse(steps, targetResponse, responseNumber);
    };
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
                <Button variant='contained' sx={{ mt: 3, ml: 1 }} color='primary' disabled={steps == 0} onClick={handleBack}>Back</Button>
                <Button variant='contained' sx={{ mt: 3, ml: 1 }} color='primary' onClick={handleNext}>Next</Button>
            </Box>
        </div>);
}

FirstStep.defaultProps = {
    question: {}
}



const StepForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [values, setValues] = useState({});
    const userObject = useSelector((state) => state.userReducer.currUser);
    const toBeUpdated = async function(){
        const questionJson = await questionService.getQuestions()
        setQuestions(questionJson)
        const values = Object.fromEntries(questionJson.map(obj => {
            const currQuestion = obj.question
                return [currQuestion, {
                    response: '',
                    responseNumber: 0
                }]
            }));
        setValues(values)
    }

    if (Object.keys(values).length !== 0 && !values["responses"]) {
        Object.keys(values).forEach((key, index) => {
            let defaultResponse = {
                response: values[key].response[0],
                responseNumber: 1
            };
            if (!values["responses"]) {
                values["responses"] = {};
            }
            values["responses"][index + 1] = defaultResponse;
        });
    }

    console.log(values);

    const storeResponse = (step, response, responseNumber) => {
        step++;
        let res = {
            response: response,
            responseNumber: responseNumber
        };
        let allResponse = {...values["responses"]};
        allResponse[step] = res;
        let value = {
            ...values,
            "responses" : allResponse
        };
        console.log(value);
        setValues(value);
    };

    // Proceed to next step
    const handleNext = () => {
        setActiveStep((prev) => prev + 1)
        // setValues(...)
    };
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
                    let newIndex = ++num;
                    return ["question" + newIndex, {
                        question: obj.question,
                        image: obj.questionImage,
                        response: obj.destinationMapping.map(r => r.response)
                    }];
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
                        <Success values={values} />
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

                            {handleSteps(activeStep, handleNext, handleBack, storeResponse, values)}
                        </>
                    )}</Paper></Container>
        </>
    )
}

export default StepForm
