import { MdOutlineModeEdit } from 'react-icons/md';

export function EditButton({ onClick }) {
  return (
    <div class="h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center cursor-pointer transition-all gap-2 px-4 font-semibold" onClick={onClick}>
      <MdOutlineModeEdit />
      Edit
    </div>
  )
}