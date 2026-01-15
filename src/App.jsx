import React from "react"
import { Heading } from "./components/Heading"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"

export const App = () => {
  return (
    <div className="container mx-auto max-w-lg p-4">
      <Heading />
      <TodoForm />
      <TodoList />
    </div>
  )
}
