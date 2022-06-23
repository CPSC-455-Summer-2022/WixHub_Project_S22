import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getDestinationAsync, getDestinationsAsync } from '../thunks/destinationThunks';

const INITIAL_STATE = {
    list: [],
    getDestination: REQUEST_STATE.IDLE,
    getDestinations: REQUEST_STATE.IDLE,
    error: null
};

const destinationSlice = createSlice({
    name: 'destinations',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDestinationAsync.pending, (state) => {
                state.getDestination = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getDestinationAsync.fulfilled, (state, action) => {
                state.getDestination = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getDestinationAsync.rejected, (state, action) => {
                state.getDestination = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(getDestinationsAsync.pending, (state) => {
                state.getDestinations = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getDestinationsAsync.fulfilled, (state, action) => {
                state.getDestinations = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(getDestinationsAsync.rejected, (state, action) => {
                state.getDestinations = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});


export default destinationSlice.reducer;