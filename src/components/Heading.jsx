import { format } from "date-fns"
import { useTodoStore } from "../stores/todoStore"

export const Heading = () => {
  const todos = useTodoStore((state) => state.todos)
  const completeAllTodos = useTodoStore((state) => state.completeAllTodos)

  const totalTodos = todos.length
  const completed = todos.filter((todo) => todo.completed).length
  const uncompleted = totalTodos - completed

  const today = format(new Date(), "EEE d MMMM")

  return (
    <header className="header-bg text-white p-6 rounded-t-xl mb-6 min-h-200px">
      <div className="flex justify-between items-start gap-4">

        <div>
          <h1 className="text-3xl font-semibold mt-12 mb-2">To-do list</h1>
          <p className="text-blue-100 mt-1">{today}</p>
        </div>

        <div className="text-right space-y-1">
          <p className="text-sm">Total: {totalTodos}</p>
          <p className="text-sm text-green-200">Completed: {completed}</p>
          <p className="text-sm text-yellow-200">Uncompleted: {uncompleted}</p>

          {totalTodos > 0 && (
            <button
              onClick={completeAllTodos}
              disabled={uncompleted === 0}
              className="mt-2 p-1 rounded-sm border-4 border-double text-sm hover:text-blue-200"
            >
              Complete all
            </button>
          )}
        </div>
      </div>
    </header>
  )
}