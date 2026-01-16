import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      darkMode: false,
      categories: ["General", "Work", "Home", "Personal", "Family"],

      addTodo: (text, category = "General", dueDate = null) => {
        const newTodo = {
          id: Date.now().toString(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
          category,
          dueDate: dueDate ? new Date(dueDate).toISOString() : null,
        }
        set((state) => ({ todos: [...state.todos, newTodo] }))
      },

      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }))
      },

      completeTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: true } : todo
          ),
        }))
      },

      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }))
      },

      completeAllTodos: () => {
        set((state) => ({
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        }))
      },

      toggleDarkMode: () => {
        set((state) => ({ darkMode: !state.darkMode }))
      },
    }),
    {
      name: "todo-storage",
    }
  )
)