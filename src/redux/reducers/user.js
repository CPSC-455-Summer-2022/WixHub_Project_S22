import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../stateUtil';
import { loginUserAsync } from '../thunks/userThunks';

const INITIAL_STATE = {
    user: {},
    loginUser: REQUEST_STATE.IDLE,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.loginUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loginUser = REQUEST_STATE.FULFILLED;
                state.user = action.payload;
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loginUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default userSlice.reducer;