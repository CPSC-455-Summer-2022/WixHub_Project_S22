import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actions/actionTypes';
import QuestionService from '../services/questionService';

export const getQuestionsAsync = createAsyncThunk(
    actionTypes.GET_QUESTIONS,
    async () => {
        return await QuestionService.getQuestions();
    }
);

export const getQuestionAsync = createAsyncThunk(
    actionTypes.GET_QUESTION,
    async (id) => {
        return await QuestionService.getQuestion(id);
    }
);

export const generateRecommendationAsync = createAsyncThunk(
    actionTypes.GENERATE_RECOMMENDATION,
    async (input) => {
        return await QuestionService.recommendationGenerator(input);
    }
);
