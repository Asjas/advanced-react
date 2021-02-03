import useForm from '../utils/useForm';

function CreateProduct() {
  const { inputs, handleChange } = useForm({
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes',
  });

  return (
    <form>
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
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default CreateProduct;
