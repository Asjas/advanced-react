import styled from "styled-components";
import Product from "./Product";
import { useAllProductsQuery } from "../types/generated-queries";

const NEXT_PUBLIC_PAGE = parseInt(process.env.NEXT_PUBLIC_PAGE);

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

function Products({ page }: { page: number }) {
  const { data, error, loading } = useAllProductsQuery({
    variables: { skip: page * NEXT_PUBLIC_PAGE - NEXT_PUBLIC_PAGE, first: NEXT_PUBLIC_PAGE },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ProductsListStyles>
      {data.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsListStyles>
  );
}

export default Products;
