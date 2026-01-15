export const TodoSkeleton = () => {
  return (
    <li className="flex items-center gap-3 border rounded border-gray-200 px-3 py-2 opacity-50">
      {/* fake checkbox */}
      <div className="w-5 h-5 rounded-full border-2 border-gray-300" />

      {/* fake text */}
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
      </div>
    </li>
  )
}