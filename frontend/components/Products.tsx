import styled from 'styled-components';
import Product from './Product';
import { useAllProductsQuery } from '../types/generated-queries';
import { perPage } from '../config';

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

function Products({ page }: { page: number }) {
  const { data, error, loading } = useAllProductsQuery({
    variables: { skip: page * perPage - perPage, first: perPage },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ProductsListStyles>
      {data.allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsListStyles>
  );
}

export default Products;
