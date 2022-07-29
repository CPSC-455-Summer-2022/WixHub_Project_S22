import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from '../actions/actionTypes';
import DestinationService from '../services/destinationService';

export const getDestinationsAsync = createAsyncThunk(
    actionTypes.GET_DESTINATIONS,
    async () => {
        return await DestinationService.getDestinations();
    }
);

export const getDestinationAsync = createAsyncThunk(
    actionTypes.GET_DESTINATION,
    async (id) => {
        return await DestinationService.getDestination(id);
    }
);