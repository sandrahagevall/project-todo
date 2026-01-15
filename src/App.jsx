import React from "react"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"

export const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}
