import Downshift from 'downshift'
import { MdOutlineLayers, MdArrowDropDown } from "react-icons/md";

const items = [
  { value: 'production', label: 'Production' },
  { value: 'staging', label: 'Staging' },
  { value: 'draft', label: 'Draft' },
]

export function EnvDropDown() {
  return (
    <div className="flex">
      <div className="pr-2">
        <MdOutlineLayers size={40} className="text-gray-600" />
      </div>
      <Downshift
        initialSelectedItem={items[0]} // Set the default value to 'Production'
        itemToString={(item) => (item ? item.label : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getToggleButtonProps,
          toggleMenu,
          getRootProps,
          isOpen,
          selectedItem,
          highlightedIndex,
        }) => (
          <div {...getRootProps({}, { suppressRefError: true })}>
            <button
              {...getToggleButtonProps({
                style: {
                  width: '128px',
                  textAlign: 'left',
                  padding: '8px',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              })}
            >
              {selectedItem ? selectedItem.label : 'Choose an environment'}
              <MdArrowDropDown className="text-gray-600" />
            </button>
            <ul {...getMenuProps()} className="min-w-max bg-white">
              {isOpen &&
                items.map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        padding: '2px 4px',
                        backgroundColor: highlightedIndex === index ? '#bde4ff' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.label}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </Downshift>
    </div>
  )
}
