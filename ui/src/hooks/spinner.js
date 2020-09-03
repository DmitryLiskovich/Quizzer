import { useState } from 'react';
import { Spinner } from '../components/Spinner/Spinner';

export function useSpinner() {
  const [spinner, setSpinner] = useState(false);
  
  function setStatus(status) {
    setSpinner(status);
  }

  return [spinner ? Spinner : '', setStatus];
}