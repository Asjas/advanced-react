import { SyntheticEvent } from 'react';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import {
  useProductQuery,
  useUpdateProductMutation,
} from '../types/generated-queries';
import useForm from '../utils/useForm';

function UpdateProduct({ id }: { id: string }) {
  const { data, loading, error } = useProductQuery({ variables: { id } });
  const [
    updateProduct,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useUpdateProductMutation();

  const { inputs, handleChange, clearForm } = useForm({
    name: data?.Product.name || '',
    price: data?.Product.price || 0,
    description: data?.Product.description || '',
  });

  if (loading) return <p>Loading....</p>;

  if (error) return <DisplayError error={error} />;

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await updateProduct({
      variables: {
        id,
        name: inputs.name,
        description: inputs.description,
        price: inputs.price,
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <DisplayError error={updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Product</button>
      </fieldset>
    </Form>
  );
}

export default UpdateProduct;
