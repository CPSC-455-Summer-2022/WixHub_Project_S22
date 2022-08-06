import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actions/actionTypes';
import UserService from '../../services/userService';

export const getUsersAsync = createAsyncThunk(
    actionTypes.GET_USERS,
    async () => {
        return await UserService.getUsers();
    }
);

export const getUserAsync = createAsyncThunk(
    actionTypes.GET_USER,
    async (id) => {
        return await UserService.getUser(id);
    }
);

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

export const deleteAllUsersAsync = createAsyncThunk(
    actionTypes.DELETEALL_USERS,
    async () => {
        return await UserService.deleteAllUsers();
    }
);

export const deleteUserAsync = createAsyncThunk(
    actionTypes.DELETE_USER,
    async (id) => {
        return await UserService.deleteUser(id);
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
