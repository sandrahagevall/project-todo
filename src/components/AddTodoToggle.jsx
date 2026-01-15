export const AddTodoToggle = ({ onAdd }) => {
  return (
    <div className="p-4 mb-4">
      <button
        onClick={onAdd}
        type="button"
        className="
          bg-white rounded-xl shadow p-4 w-full
          hover:bg-gray-50 transition cursor-pointer
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              w-7 h-7
              rounded-full
              bg-blue-500
              text-white
              flex items-center justify-center
              text-lg font-semibold
            "
          >
            +
          </div>

          <div className="text-blue-500 text-lg font-medium">
            Add a to-do
          </div>
        </div>
      </button>
    </div>
  )
}