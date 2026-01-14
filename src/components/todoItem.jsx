import React from "react"
import { useTodoStore } from "../stores/todoStore"
import { motion } from "framer-motion"

export const TodoItem = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const completeTodo = useTodoStore((state) => state.completeTodo)

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  }
  return (
    <motion.li
      variants={variants}
      initial="initial"
      animate="animate"
      className={`flex items-center p-2`}
      Layout
    >
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTask(todo.id)} className="form-checkbox h-5 w-5" />
      <span className={`flex-1 ml-2 ${todo.completed ? "line-through text-gray-500" : ""}`}>
        {todo.text}
      </span>
      <button onClick={() => deleteTask(todo.id)} className="text-red-500 hover:text-red-700">
        Delete
      </button>
    </motion.li>
  )
}

