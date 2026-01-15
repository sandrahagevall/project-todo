import React from "react"
import { useTodoStore } from "../stores/todoStore"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos)

  // Empty state handling
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No todos available. Add a todo to get started!</p>
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

