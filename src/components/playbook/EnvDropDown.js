import Downshift from 'downshift'

const items = [
  { value: 'production', label: 'Production' },
  { value: 'staging', label: 'Staging' },
  { value: 'draft', label: 'Draft' },
]

export function EnvDropDown() {
  return (
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
              },
            })}
          >
            {selectedItem ? selectedItem.label : 'Choose an environment'}
          </button>
          <ul {...getMenuProps()} >
            {isOpen &&
              items.map((item, index) => (
                <li
                  {...getItemProps({
                    key: item.value,
                    index,
                    item,
                    style: {
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
  )
}
