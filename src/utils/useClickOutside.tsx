// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, { useEffect } from 'react';

export const useClickOutside = (ref: React.MutableRefObject<HTMLElement | null>, callback: () => void): void => {
  const handleClick = (e: MouseEvent): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', ev => {
      handleClick(ev);
    });
    return () => {
      document.removeEventListener('mousedown', ev => {
        handleClick(ev);
      });
    };
  }, []);
};
