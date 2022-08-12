import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayloadI {
  id: string;
  text: string;
  completed: boolean;
}
interface ToDoStateI {
  todos: PayloadI[];
}

const initialState: ToDoStateI = {
  todos: [],
}

// const addTodo: CaseReducer<State, PayloadAction<PayloadI>> = (
//   state,
//   action
// ) => {
//   state.todos.push({
//     id: new Date().toISOString(),
//     text: action.payload.text,
//     completed: false,
//   });
// };

const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = toDoSlice.actions;

export default toDoSlice.reducer;
