// Taken from: https://www.codemzy.com/blog/reactjs-dropdown-component

import React, { ReactNode } from 'react';
import { css } from '@linaria/core';

const DropdownButtonClass = css`
  font-weight: 700;
  color: var(--theme-color-gray-900);
  background-color: var(--theme-color-alt-100);
  display: flex;
  align-items: center;
`;

const DropdownItemClass = css`
  padding: 0.25rem 0.25rem;
  white-space: nowrap;
  display: flex;
`;

const DropdownContentClass = css`
  position: absolute;
  z-index: 20;
  border-radius: 0.25rem;
  border: 1px solid var(--theme-color-gray-100);
  background-color: var(--theme-color-black);
  overflow: hidden;
  margin: 0.25rem 0;
  overflow-y: auto;
`;

const DropdownListClass = css`
  border-top-width: 1px;
  border-color: var(--theme-color-gray-100);
  color: var(--theme-color-white);
`;

// dropdown context for open state
const DropdownContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

function Dropdown({ children }: { children: ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef<any>(null);

  React.useEffect(() => {
    // show no dropdown
    function close(e: any) {
      if (!dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    // add or remove event listener
    if (open) {
      window.addEventListener('click', close);
    }
    // cleanup
    return function removeListener() {
      window.removeEventListener('click', close);
    };
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef}>{children}</div>
    </DropdownContext.Provider>
  );
}

function DropdownButton({ children }: { children: ReactNode }) {
  const { open, setOpen } = React.useContext(DropdownContext); // get the context

  // to open and close the dropdown
  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <button onClick={toggleOpen} className={DropdownButtonClass}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={15}
        height={15}
        strokeWidth={4}
        stroke="currentColor"
        style={{ marginLeft: '0.5rem', rotate: open ? '180deg' : '0deg' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
}

function DropdownItem({ children }: { children: ReactNode }) {
  return <li className={DropdownItemClass}>{children}</li>;
}

function DropdownContent({ children }: { children: ReactNode }) {
  const { open } = React.useContext(DropdownContext); // get the context

  return (
    <div
      className={DropdownContentClass}
      style={{
        display: open ? 'block' : 'none',
        boxShadow: open
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          : 'initial',
      }}
    >
      {children}
    </div>
  );
} // dropdown list for dropdown menus

function DropdownList({ children, ...props }: { children: ReactNode }) {
  const { setOpen } = React.useContext(DropdownContext); // get the context

  return (
    <ul onClick={() => setOpen(false)} className={DropdownListClass} {...props}>
      {children}
    </ul>
  );
}

Dropdown.List = DropdownList;
Dropdown.Content = DropdownContent;
Dropdown.Button = DropdownButton;
Dropdown.Item = DropdownItem;

export default Dropdown;
