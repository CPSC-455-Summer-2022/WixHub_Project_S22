import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actions/actionTypes';
import UserService from '../../services/userService';

export const loginUserAsync = createAsyncThunk(
    actionTypes.LOGIN_USER,
    async (emailPass) => {
        return await UserService.loginUser(emailPass);
    }
)
