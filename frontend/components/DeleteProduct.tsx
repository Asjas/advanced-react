import { ApolloCache, Cache } from '@apollo/client';
import { ReactNode } from 'react';
import { Product, useDeleteProductMutation } from '../types/generated-queries';

type DeleteProductProps = {
  id: string;
  children: ReactNode;
};

type UpdateFnPayloadProps = {
  data: {
    deleteProduct: Product;
  };
};

function update(cache: ApolloCache<any>, payload: UpdateFnPayloadProps) {
  cache.evict(cache.identify(payload.data.deleteProduct) as Cache.EvictOptions);
}

function DeleteProduct({ id, children }: DeleteProductProps) {
  const [deleteProduct, { loading, error }] = useDeleteProductMutation({
    variables: { id },
    update,
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
