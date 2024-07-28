// src/components/LoadingAnimation/SuspenseWrapper.js
import React, { Suspense } from 'react';
import Preloader from './Loading';
import useResetKey from './useResetKey';

const SuspenseWrapper = ({ children }) => {
  const key = useResetKey();

  return (
    <Suspense fallback={<Preloader />} key={key}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
