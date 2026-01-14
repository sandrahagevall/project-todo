import { create } from "zustand"
import { persist } from "zustand/middleware"
import { format } from "date-fns"

export const useTodoStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      darkMode: false,
      categories: ["General", "Work", "Home"],

      loadTasks: () => {

      },

      addTask: (text, category = "General", dueDate = null) => {
        const newTask = {
          id: Date.now().toString(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
          category,
          dueDate: dueDate ? new Date(dueDate).toISOString() : null,
        }
        set((state) => ({ tasks: [...state.tasks, newTask] }))
      },

      toggleTaskCompletion: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        }))
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }))
      },

      completeAllTasks: () => {
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, completed: true })),
        }))
      },

      toggleDarkMode: () => {
        set((state) => ({ darkMode: !state.darkMode }))
      },

      getFormattedDate: (dateString) => {
        return format(new Date(dateString), "MMM d, yyyy h:mm a")
      },

      isOverDue: (dueDate) => {
        if (!dueDate) return false
        const now = new Date()
        return new Date(dueDate) < now
      },

      getTasksByCategory: (category) => {
        return get().tasks.filter((task) => task.category === category)
      },

      getUncompletedCount: () => {
        return get().tasks.filter((task) => !task.completed)
      },

      getCompletedCount: () => {
        return get().tasks.filter((task) => task.completed)
      },

      getTotalTasksCount: () => {
        return get().tasks.length
      },
    }),
    {
      name: "todo-storage", // unique name
    }
  )
)