import styled from "styled-components";
import CartStyles from "./styles/CartStyles";
import Supreme from "./styles/Supreme";
import CloseButton from "./styles/CloseButton";
import calcTotalPrice from "../utils/calcTotalPrice";
import formatMoney from "../utils/formatMoney";
import { CartItem as CartItemType } from "../types/types";
import { useCart } from "../hooks/Cart";
import { useUser } from "../hooks/User";
import RemoveFromCart from "./RemoveFromCart";
import Checkout from "./Checkout";

const CartItemStyles = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);

  img {
    margin-right: 10px;
  }

  h3,
  p {
    margin: 0;
  }
`;

type CartItemProps = { cartItem: CartItemType };

function CartItem({ cartItem }: CartItemProps) {
  const { product } = cartItem;

  return (
    <CartItemStyles>
      <img width="100" src={product.photo.image.publicUrlTransformed} alt={product.photo.altText} />
      <div>
        <h3>{product.name}</h3>
        <p>{formatMoney(product.price * cartItem.quantity)}</p>
        <p>
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();

  if (!me) return null;

  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
        <CloseButton title="Close cart" type="button" onClick={closeCart}>
          &times;
        </CloseButton>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}

export default Cart;
