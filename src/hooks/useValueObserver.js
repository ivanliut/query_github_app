import { useEffect, useRef } from 'react';

export const useValueObserver = (cb, value) => {
  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted.current) {
      cb && cb(value);
    } else {
      componentJustMounted.current = false;
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps
};
