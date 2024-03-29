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
    async (arg) => {
        return await UserService.editUser(arg);
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

export const deleteUserDestinationAsync = createAsyncThunk(
    actionTypes.DELETE_USER_DESTINATION,
    async (arg) => {
        return await UserService.deleteUserDestination(arg);
    }
)
