import React from "react"
import { useTodoStore } from "../stores/todoStore"
import { motion } from "framer-motion"
import { format } from "date-fns"

export const TodoItem = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)

  const createdAt = format(new Date(todo.createdAt), "dd MMM yyyy")

  const dueDate = todo.dueDate ? format(new Date(todo.dueDate), "dd MMM yyyy") : null

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  }
  return (
    <motion.li
      variants={variants}
      initial="initial"
      animate="animate"
      className={`bg-white rounded-xl shadow p-4 flex gap-3 items-start`}
      layout
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="mt-1 h-5 w-5 accent-green-500"
      />
      <span className={`flex-1 ml-2 ${todo.completed ? "line-through text-gray-500" : ""}`}>
        {todo.text}
      </span>
      <div className="text-xs text-gray-400 mt-1 space-y-0.5">
        <p>Created: {createdAt}</p>
        {dueDate && <p>Due: {dueDate}</p>}
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700" aria-label="Delete todo">
        Delete
      </button>
    </motion.li>
  )
}

