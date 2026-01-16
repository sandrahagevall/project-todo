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
      className="bg-white p-4 rounded-xl shadow space-y-3 border border-gray-300"
    >
      <input
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />

      <div className="flex gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 border rounded px-2 py-2"
        >
          <option>General</option>
          <option>Work</option>
          <option>Home</option>
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
          className="text-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Save
        </button>
      </div>
    </form>
  )
}