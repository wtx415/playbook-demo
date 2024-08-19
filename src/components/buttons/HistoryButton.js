import { MdOutlineHistory } from "react-icons/md";

export function HistoryButton() {
  return (
    <button className="bg-gray-400 text-white p-2 flex items-center justify-center rounded-full font-bold">
      <MdOutlineHistory className="text-white" size={20} />
    </button>
  )
}