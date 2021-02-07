import styled from 'styled-components';
import { useDeleteCartItemMutation } from '../types/generated-queries';

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;

  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

function RemoveFromCart({ id }: { id: string }) {
  const [removeFromCart, { loading }] = useDeleteCartItemMutation({
    variables: { id },
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
