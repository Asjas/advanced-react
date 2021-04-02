import { useAddToCartMutation, refetchUserQuery } from '../types/generated-queries';

function AddToCart({ id }: { id: string }) {
  const [addToCart, { loading }] = useAddToCartMutation({
    variables: { id },
    refetchQueries: [refetchUserQuery()],
  });

  async function handleClick() {
    await addToCart();
  }

  return (
    <button type="button" disabled={loading} onClick={handleClick}>
      Add{loading && 'ing'} To Cart
    </button>
  );
}

export default AddToCart;
