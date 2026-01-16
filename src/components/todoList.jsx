import { useTodoStore } from "../stores/todoStore"
import { TodoItem } from "./TodoItem"
import { TodoSkeleton } from "./TodoSkeleton"

export const TodoList = ({ isAdding }) => {
  const todos = useTodoStore((state) => state.todos)


  if (isAdding) {
    return null
  }

  // Empty state 
  if (todos.length === 0) {
    return (
      <div className="mt-4">
        <p className="text-center mb-4 text-gray-500 dark:text-white">
          No to-dos available. Add a to-do to get started!
        </p>

        <ul className="space-y-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index}>
              <TodoSkeleton />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <ul className="space-y-3 mt-6">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

