import styled from 'styled-components';
import { ApolloCache, Cache } from '@apollo/client';
import {
  useDeleteCartItemMutation,
  CartItem,
} from '../types/generated-queries';

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;

  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

type UpdateFnPayloadProps = {
  data: {
    deleteCartItem: CartItem;
  };
};

function update(cache: ApolloCache<any>, payload: UpdateFnPayloadProps) {
  cache.evict(
    cache.identify(payload.data.deleteCartItem) as Cache.EvictOptions
  );
}

function RemoveFromCart({ id }: { id: string }) {
  const [removeFromCart, { loading }] = useDeleteCartItemMutation({
    variables: { id },
    update,
  });

  async function handleClick() {
    await removeFromCart();
  }

  return (
    <BigButton
      title="Remove this item from cart"
      type="button"
      onClick={handleClick}
    >
      &times;
    </BigButton>
  );
}

export default RemoveFromCart;
