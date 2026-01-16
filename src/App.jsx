import { useState, useEffect } from "react"
import { Heading } from "./components/Heading"
import { TodoList } from "./components/TodoList"
import { AddTodoToggle } from "./components/AddTodoToggle"
import { TodoForm } from "./components/TodoForm"
import { useTodoStore } from "./stores/todoStore"

export const App = () => {
  const [isAdding, setIsAdding] = useState(false)
  const darkMode = useTodoStore((state) => state.darkMode)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <main className="min-h-screen grid-bg flex justify-center py-10">
      <section className="
        w-full max-w-md
        bg-white dark:bg-gray-800
        dark:text-white
        dark:shadow-black/30
        dark:border
        dark:border-gray-700
        rounded-2xl shadow-md
        flex flex-col">
        <Heading />

        <div className="flex-1 px-4">
          {isAdding && (
            <TodoForm onClose={() => setIsAdding(false)} />
          )}

          <TodoList isAdding={isAdding} />
        </div>

        <AddTodoToggle onAdd={() => setIsAdding(true)} />
      </section>
    </main>
  )
}