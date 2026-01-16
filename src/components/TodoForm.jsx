import { useState } from "react"
import { useTodoStore } from "../stores/todoStore"

export const TodoForm = ({ onClose }) => {
  const addTodo = useTodoStore((state) => state.addTodo)

  const [text, setText] = useState("")
  const [category, setCategory] = useState("General")
  const [dueDate, setDueDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text, category, dueDate || null)
    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white 
        dark:bg-blue-900 
        p-4 mt-4 
        rounded-xl 
        shadow space-y-3 
        border border-gray-300
      "
    >
      <textarea
        value={text}
        rows={1}
        placeholder="What do you need to do?"
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded px-3 py-2 wrap-break-word resize-none"
      />

      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            flex-1 border 
            rounded px-2 py-2 
            dark:bg-blue-900
            dark:text-gray-100
            dark:border-gray-100
            scheme-light
            dark:scheme-dark
          "
        >
          <option>General</option>
          <option>Work</option>
          <option>Home</option>
          <option>Personal</option>
          <option>Family</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border rounded px-2 py-2"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 dark:text-gray-400 cursor-pointer px-4 py-1 rounded hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600 transition"
        >
          Save
        </button>
      </div>
    </form>
  )
}