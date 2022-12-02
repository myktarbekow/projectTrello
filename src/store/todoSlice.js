import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    addSubTask(state, action) {
      const todoItem = state.todos.find((item) => {
        return item.id === action.payload.iD;
      });

      todoItem.subtask.push(action.payload.subtask);
    },

    deleteHandler(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteHandler, addSubTask } = todoSlice.actions;

export default todoSlice.reducer;
