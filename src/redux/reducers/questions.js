import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getQuestionAsync, getQuestionsAsync, generateRecommendationAsync } from '../thunks/questionThunks';

const INITIAL_STATE = {
    list: [],
    getQuestion: REQUEST_STATE.IDLE,
    getQuestions: REQUEST_STATE.IDLE,
    generateRecommendation: REQUEST_STATE.IDLE,
    error: null
};

const questionSlice = createSlice({
    name: 'questions',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQuestionAsync.pending, (state) => {
                state.getQuestion = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getQuestionAsync.fulfilled, (state, action) => {
                state.getQuestion = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getQuestionAsync.rejected, (state, action) => {
                state.getQuestion = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(getQuestionsAsync.pending, (state) => {
                state.getQuestions = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getQuestionsAsync.fulfilled, (state, action) => {
                state.getQuestions = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(getQuestionsAsync.rejected, (state, action) => {
                state.getQuestions = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(generateRecommendationAsync.pending, (state) => {
                state.generateRecommendation = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(generateRecommendationAsync.fulfilled, (state, action) => {
                state.generateRecommendation = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(generateRecommendationAsync.rejected, (state, action) => {
                state.generateRecommendation = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default questionSlice.reducer