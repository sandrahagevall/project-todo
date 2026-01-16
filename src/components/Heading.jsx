import { format } from "date-fns"
import { useTodoStore } from "../stores/todoStore"

export const Heading = () => {
  const todos = useTodoStore((state) => state.todos)
  const completeAllTodos = useTodoStore((state) => state.completeAllTodos)
  const darkMode = useTodoStore((state) => state.darkMode)
  const toggleDarkMode = useTodoStore((state) => state.toggleDarkMode)

  const totalTodos = todos.length
  const completed = todos.filter((todo) => todo.completed).length
  const uncompleted = totalTodos - completed

  const today = format(new Date(), "EEE d MMMM")

  return (
    <header className="header-bg text-white p-6 rounded-t-xl mb-1 xl:min-h-50">
      <div className="flex justify-between items-start gap-4">

        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mt-18 xl:mt-24 mb-2">
            To-do list
          </h1>
          <p className="md:text-xl text-blue-50 ml-1">{today}</p>
        </div>

        <div className="text-right space-y-1">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="ml auto mb-1 p-2 rounded-full hover:scale-105 transition">
            <img
              src="/darkmode.png"
              alt="Dark mode toggle icon"
              className={`w-8 h-8 transition ${darkMode ? "opacity-100" : "opacity-70"}`}
            />
          </button>
          <p className="text-sm">Total: {totalTodos}</p>
          <p className="text-sm text-green-200 dark:text-green-400">
            Completed: {completed}
          </p>
          <p className="text-sm text-yellow-200 dark:text-yellow-400">
            Uncompleted: {uncompleted}
          </p>

          {totalTodos > 0 && (
            <button
              onClick={completeAllTodos}
              disabled={uncompleted === 0}
              className="
                mt-2 xl:mt-10
                px-3 py-1.5
                text-sm
                font-medium
                rounded-md
                border border-white/30
                text-white
                hover:bg-white/10
                cursor-pointer
                transition
                disabled:opacity-40
                disabled:cursor-not-allowed
              "
            >
              Complete all
            </button>
          )}
        </div>
      </div>
    </header>
  )
}