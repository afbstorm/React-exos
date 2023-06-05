import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleCompleted } from "../actions/task-actions.js";

const initialState = {
    tasks: [],
};

const taskReducer = createReducer(initialState, (builder) => {
    builder
            .addCase(addTask, (state, action) => {
                state.tasks.push(action.payload);
            }
        )
            .addCase(deleteTask, (state, action) => {
                state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            }
        )
            .addCase(toggleCompleted, (state, action) => {
                state.tasks = state.tasks.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task);
            }
        )
            .addDefaultCase((state, action) => {
                console.log("Default case reached");
            }
        );
});

export default taskReducer;