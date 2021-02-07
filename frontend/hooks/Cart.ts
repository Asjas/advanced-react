import { useContext } from 'react';
import { LocalStateContext } from '../context/Cart';

function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { useCart };
