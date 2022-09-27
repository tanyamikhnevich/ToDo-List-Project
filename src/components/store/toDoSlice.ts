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
  id?: string;
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
    },
    changeTodo(state, action: PayloadAction<AddToDoI>) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (!todo) return
      todo.name = action.payload.name;
      todo.description = action.payload.description;
      todo.tags = action.payload.tags;
      state.todos = [...state.todos.filter((todo) => todo.id !== action.payload.id), todo]
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
    addTags(state, action: PayloadAction<Array<string>>) {
      state.interimTodo.tags = action.payload;
    },
    clearInterimTag(state) {
      state.interimTodo.tags = [];
    },
    removeTag(state, action: PayloadAction<string>) {
      state.interimTodo.tags = state.interimTodo.tags.filter(
        (tag) => tag !== action.payload
      );
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodoComplete,
  addTag,
  removeTag,
  addTags,
  clearInterimTag,
  changeTodo,
} = toDoSlice.actions;

export default toDoSlice.reducer;
