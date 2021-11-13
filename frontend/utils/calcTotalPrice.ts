import { CartItem } from "../types/generated-queries";

export default function calcTotalPrice(cart: CartItem[]) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.quantity || !cartItem.product || !cartItem.product.price) return tally;

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
