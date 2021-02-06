import { LocalStateContext } from './../context/cartState';
import { useContext } from 'react';

function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { useCart };
