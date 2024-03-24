import React from 'react';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../data/tasks";

const fetchAllTasks = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);

    });

export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async () => {
        const response = await fetchAllTasks();
        return response
    },
)

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        array: []
    },
    reducers: {
        addTask: (state, { payload: newTask }) => {
            state.array.push(newTask);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.array = action.payload;

        })
    },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;