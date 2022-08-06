import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addUserAsync, editUserAsync, loginUserAsync, logoutUserAsync } from '../thunks/userThunks';

const INITIAL_STATE = {
    currUser: {},
    addUser: REQUEST_STATE.IDLE,
    editUser: REQUEST_STATE.IDLE,
    loginUser: REQUEST_STATE.IDLE,
    logoutUser: REQUEST_STATE.IDLE,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addUserAsync.pending, (state) => {
                state.addUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addUserAsync.fulfilled, (state, action) => {
                state.addUser = REQUEST_STATE.FULFILLED;
                state.currUser = action.payload;
            })
            .addCase(addUserAsync.rejected, (state, action) => {
                state.addUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(editUserAsync.pending, (state) => {
                state.editUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(editUserAsync.fulfilled, (state, action) => {
                state.editUser = REQUEST_STATE.FULFILLED;
                state.currUser = action.payload;
            })
            .addCase(editUserAsync.rejected, (state, action) => {
                state.editUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(loginUserAsync.pending, (state) => {
                state.loginUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loginUser = REQUEST_STATE.FULFILLED;
                state.currUser = action.payload.foundUser; ///!!!TODOREDFLAG
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loginUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(logoutUserAsync.pending, (state) => {
                state.logoutUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(logoutUserAsync.fulfilled, (state, action) => {
                state.logoutUser = REQUEST_STATE.FULFILLED;
                state.currUser = {};
            })
            .addCase(logoutUserAsync.rejected, (state, action) => {
                state.logoutUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default userSlice.reducer;