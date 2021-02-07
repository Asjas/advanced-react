import { createContext, useState, ReactNode } from 'react';

type CartContext = {
  cartOpen: boolean;
  openCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
};

export const LocalStateContext = createContext<CartContext>(null);

function CartStateProvider({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);

  function openCart() {
    setCartOpen(true);
  }

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  return (
    <LocalStateContext.Provider
      value={{ cartOpen, openCart, toggleCart, closeCart }}
    >
      {children}
    </LocalStateContext.Provider>
  );
}

export { CartStateProvider };
