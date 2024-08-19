import React from 'react';
import { useSelect } from 'downshift';

export function DeployButton() {
  const items = [
    {
      label: 'Deploy to Production',
      value: 'production',
    },
    {
      label: 'Deploy to Staging',
      value: 'staging',
    },
  ];


  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    selectedItem,
  } = useSelect({
    items,
    onSelectedItemChange: ({ selectedItem }) => {
      console.log(`Deploying to: ${selectedItem.label}`);
    },
  });

  return (
    <div className="relative inline-block">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        {...getToggleButtonProps()}
      >
        Deploy
      </button>

      {isOpen && (
        <ul
          {...getMenuProps()}
          className="absolute left-0 mt-2 min-w-max bg-white border border-gray-300 rounded shadow-lg"
        >
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              {...getItemProps({ item, index })}
              className={`py-2 px-4 cursor-pointer ${highlightedIndex === index ? 'bg-blue-500 text-white' : ''
                } ${selectedItem === item ? 'font-bold' : ''}`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DeployButton;
