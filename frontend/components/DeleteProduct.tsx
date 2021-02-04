import { ReactNode } from 'react';
import { useDeleteProductMutation } from '../types/generated-queries';

type DeleteProductProps = {
  id: string;
  children: ReactNode;
};

function DeleteProduct({ id, children }: DeleteProductProps) {
  const [deleteProduct, { loading, error }] = useDeleteProductMutation({
    variables: { id },
  });

  async function handleClick() {
    const response = confirm('Are you sure you want to delete this item?');
    if (response) {
      await deleteProduct().catch((err) => alert(err));
    }
  }

  return (
    <button type="button" disabled={loading} onClick={handleClick}>
      {children}
    </button>
  );
}

export default DeleteProduct;
