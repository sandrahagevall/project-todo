export const AddTodoToggle = ({ onAdd }) => {
  return (
    <div className="border-t px-4 py-3">
      <button
        onClick={onAdd}
        className="w-full flex items-center gap-2 text-left text-black font-medium"
      >
        <span className="text-xl font-semibold">+</span>
        Add a to-do
      </button>
    </div>
  )
}