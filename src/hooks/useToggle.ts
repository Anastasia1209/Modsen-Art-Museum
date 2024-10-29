import { useState, useEffect, useRef  } from 'react';

export const useToggle = (initialValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return { isOpen, toggle, open, close, ref };
};
