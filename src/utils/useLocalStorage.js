import { useState, useEffect } from 'react';
export const useLocalStorage = (lsName, defaultValues) => {
  const [elem, setElem] = useState(
    () => JSON.parse(localStorage.getItem(lsName)) ?? defaultValues
  );

  useEffect(() => {
    localStorage.setItem(lsName, JSON.stringify(elem));
  }, [elem, lsName]);

  return [elem, setElem];
};
