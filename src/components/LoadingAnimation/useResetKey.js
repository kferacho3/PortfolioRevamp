// src/hooks/useResetKey.js
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useResetKey = () => {
  const [key, setKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [location]);

  return key;
};

export default useResetKey;
