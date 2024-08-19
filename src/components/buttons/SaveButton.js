import { MdOutlineSave } from "react-icons/md";

export function SaveButton() {
  return (
    <button className="bg-blue-500 text-white font-bold px-4 py-2 flex items-center rounded">
      Save <MdOutlineSave className="ml-2" />
    </button>
  )
}