import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ToDoTaskI {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  tags: string[];
}

interface AddToDoI {
  name: string;
  description: string;
  tags: string[];
}

interface AddTagI {
  tag: string;
}

interface InterimTodoI {
  tags: string[];
}

interface ToDoStateI {
  todos: ToDoTaskI[];
  interimTodo: InterimTodoI;
}

const initialState: ToDoStateI = {
  todos: [],
  interimTodo: {
    tags: [],
  },
};

const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<AddToDoI>) {
      state.todos.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        description: action.payload.description,
        tags: state.interimTodo.tags,
        completed: false,
      });
      state.interimTodo.tags = [];
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
    addTag(state, action: PayloadAction<AddTagI>) {
      state.interimTodo.tags.push(action.payload.tag);
    },
    removeTag(state, action: PayloadAction<string>) {
      state.interimTodo.tags = state.interimTodo.tags.filter((tag) => tag !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete, addTag, removeTag } =
  toDoSlice.actions;

export default toDoSlice.reducer;
