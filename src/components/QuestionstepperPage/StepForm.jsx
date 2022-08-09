import React, { useState, useEffect } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { Container, Paper } from "@mui/material";
// import Paper from "@mui/material/Paper";
import questionService from "../../services/questionService";
import {useDispatch, useSelector} from 'react-redux';
import {editUserAsync} from "../../redux/thunks/userThunks";
import { CurrentStep } from "./CurrentStep";
import { Success } from "./Success";

export const StepForm = (props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [values, setValues] = useState({});
    const dispatch = useDispatch();
    const userObject = useSelector((state) => state.userReducer.currUser);

    const save = (id, updatedObject, message) => {
        dispatch(editUserAsync({id: id, toBeUpdated: updatedObject}))
    }

    if (Object.keys(values).length !== 0 && !values["responses"]) {
        Object.keys(values).forEach((key, index) => {
            let defaultResponse = {
                response: values[key].response[0],
                responseNumber: "1"
            };
            if (!values["responses"]) {
                values["responses"] = {};
            }
            values["responses"][index + 1] = defaultResponse;
        });
    }

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

    // Step titles
    const labels = ['1', '2', '3', '4', '5', '6', '7', '8']
    const handleSteps = (step, handleNext, handleBack, storeResponse, values) => {
        let questionNum = step + 1;
        return <CurrentStep handleNext={handleNext} handleBack={handleBack} storeResponse={storeResponse} question={values["question" + questionNum]} steps={step} />;
    }

    return (
        <>
            <Container maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    {activeStep === labels.length ? (
                        <Success values={values} save={save} id={userObject._id}/>
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
                    )}
                </Paper>
            </Container>
        </>
    )
}
