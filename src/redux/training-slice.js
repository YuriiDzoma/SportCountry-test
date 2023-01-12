import { createSlice } from '@reduxjs/toolkit';

const trainingSlice = createSlice({
    name: 'trainingPage',
    initialState: {
        progrmas: [],
        exercisesWiki: [],
    },
    addProgram(state, action) {
        const newProgram = action.payload;
        state.programs = [...state.programs, newProgram];
    },
});

export const {addProgram} = trainingSlice.actions;

/// not finished !