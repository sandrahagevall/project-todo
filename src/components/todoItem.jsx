import { useTodoStore } from "../stores/todoStore"
import { motion } from "framer-motion"
import { format } from "date-fns"

export const TodoItem = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)

  const createdAt = format(new Date(todo.createdAt), "dd MMM yyyy")

  const dueDate = todo.dueDate ? format(new Date(todo.dueDate), "dd MMM yyyy") : null

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  }
  return (
    <motion.li
      layout
      className="
    bg-white
    rounded-xl
    shadow
    p-4
    w-full border border-gray-300
  "
    >
      <div
        className="
      grid
      grid-cols-[auto_1fr_auto]
      grid-rows-[auto_auto_auto_auto]
      gap-x-3
      gap-y-1

      sm:grid-cols-[auto_1fr_180px_auto]
      sm:grid-rows-[auto_auto]
    "
      >
        {/* CHECKBOX */}
        <label
          className="
    col-start-1
    row-span-2
    self-center
    flex
    items-center
  "
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="h-5 w-5 accent-[#6cb207]"
          />
          <span className="sr-only">
            Mark todo som klar: {todo.text}
          </span>
        </label>

        {/* TODO TEXT */}
        <p
          className="
        col-start-2
        row-start-1
        min-w-0
        truncate
        font-medium
      "
        >
          {todo.text}
        </p>

        {/* DELETE */}
        <button
          onClick={() => deleteTodo(todo.id)}
          aria-label="Delete to-do"
          className="
        col-start-3
        row-span-full
        self-center
        justify-self-end

        sm:col-start-4

        text-gray-400
        hover:text-red-500
        text-lg
      "
        >
          ✕
        </button>

        {/* CATEGORY */}
        <span
          className="
        col-start-2
        row-start-2

        sm:row-start-2

        text-sm
        text-gray-600
        w-fit
      "
        >
          {todo.category}
        </span>

        {/* CREATED AT */}
        <p
          className="
        col-start-2
        row-start-3

        sm:col-start-3
        sm:row-start-1
        sm:whitespace-nowrap

        text-xs
        text-gray-400
      "
        >
          Created: {createdAt}
        </p>

        {/* DUE DATE */}
        {dueDate && (
          <p
            className="col-start-2 row-start-4 sm:col-start-3 sm:row-start-2 sm:whitespace-nowrap text-xs font-medium text-gray-400 wrap-break-word"
          >
            Due: {dueDate}
            {isOverdue && (
              <span className="text-red-600"> (Overdue)</span>
            )}
          </p>
        )}
      </div>
    </motion.li>
  )
}

