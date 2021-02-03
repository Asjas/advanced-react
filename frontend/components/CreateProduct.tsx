import { SyntheticEvent } from 'react';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import useForm from '../utils/useForm';
import {
  useCreateProductMutation,
  refetchAllProductsQuery,
} from '../types/generated-queries';

function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm({
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes',
  });

  const [
    createProductMutation,
    { data, error, loading },
  ] = useCreateProductMutation({
    variables: inputs,
    refetchQueries: [refetchAllProductsQuery()],
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await createProductMutation();
    clearForm();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input type="file" name="image" id="image" onChange={handleChange} />
        </label>
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
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}

export default CreateProduct;
