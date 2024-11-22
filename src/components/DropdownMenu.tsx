import React, { useState } from 'react';
import SortIcon from '../images/ic_sort.svg';
import styles from '../style/DropdownMenu.module.css';

interface DropdownMenuProps {
  onSelection: (Option: string) => void;
  sortOptions: { key: string; label: string }[];
}

function DropdownMenu({ onSelection, sortOptions }: DropdownMenuProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={styles['sortButtonWrapper']}>
      <button
        className={styles['sortDropdownTriggerButton']}
        onClick={toggleDropdown}
      >
        <SortIcon />
      </button>

      {isDropdownVisible && (
        <div className={styles['dropdownMenu']}>
          {sortOptions.map((option) => (
            <div
              className={styles['dropdownItem']}
              key={option.key}
              onClick={() => {
                onSelection(option.key);
                setIsDropdownVisible(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default DropdownMenu;
