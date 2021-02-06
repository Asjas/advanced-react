import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import { useUser } from './User';
import { CartItem as CartItemType } from '../types/generated-queries';
import formatMoney from '../utils/formatMoney';
import calcTotalPrice from '../utils/calcTotalPrice';

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
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.photo.altText}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)} -
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
    </CartItemStyles>
  );
}

function Cart() {
  const me = useUser();
  console.log({ me });
  if (!me) return null;
  return (
    <CartStyles open>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
      </footer>
    </CartStyles>
  );
}

export default Cart;
