import React from "react"
import { useTodoStore } from "../stores/todoStore"

export const todoList = () => {
  const todos = useTodoStore((state) => state.todos)
  return (
    <div>todoList</div>
  )
}

