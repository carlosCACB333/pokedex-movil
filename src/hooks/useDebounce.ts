import { useEffect, useState } from 'react';

const useDebounce = (input: string = '', time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [input, time]);
  return debouncedValue;
};

export default useDebounce;
