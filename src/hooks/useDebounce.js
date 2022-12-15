import { useState, useEffect } from 'react';

function useDebounce(delay, value) {
  const [debounce, setDebounce] = useState('');

  useEffect(() => {
    const timeount = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(timeount);
  }, [value]);

  return debounce;
}

export default useDebounce;
