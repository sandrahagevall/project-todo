import { useState } from "react"
import { Heading } from "./components/Heading"
import { TodoList } from "./components/TodoList"
import { AddTodoToggle } from "./components/AddTodoToggle"
import { TodoForm } from "./components/TodoForm"

export const App = () => {
  const [isAdding, setIsAdding] = useState(false)

  return (
    <main className="min-h-screen grid-bg flex justify-center py-10">
      <section className="w-full max-w-md bg-white rounded-2xl shadow-md flex flex-col">
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