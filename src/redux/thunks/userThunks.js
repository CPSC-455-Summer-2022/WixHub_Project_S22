import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actions/actionTypes';
import UserService from '../../services/userService';

export const addUserAsync = createAsyncThunk(
    actionTypes.ADD_USER,
    async (user) => {
        return await UserService.addUser(user);
    }
);

export const editUserAsync = createAsyncThunk(
    actionTypes.EDIT_USER,
    async (id, toBeUpdated) => {
        return await UserService.editUser(id, toBeUpdated);
    }
);

export const loginUserAsync = createAsyncThunk(
    actionTypes.LOGIN_USER,
    async (emailPass) => {
        return await UserService.loginUser(emailPass);
    }
)

export const logoutUserAsync = createAsyncThunk(
    actionTypes.LOGOUT_USER,
    async () => {
        return await UserService.logoutUser();
    }
)
