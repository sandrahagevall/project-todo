import { useState } from "react"
import { useTodoStore } from "../stores/todoStore"

export const TodoForm = () => {
  const [text, setText] = useState("")
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text)
    setText("")
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-between p-2">
      <input className="flex-1 p-2 border rounded" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add new todo" />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  )
}
