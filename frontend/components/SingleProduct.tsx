import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import { useProductQuery } from '../types/generated-queries';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  max-width: var(--maxWidth);
  align-items: top;
  gap: 2rem;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

function SingleProduct({ id }: { id: string }) {
  const { data, loading, error } = useProductQuery({
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <DisplayError error={error} />;

  return (
    <ProductStyles>
      <Head>
        <title>Sick Fits | {data.Product.name}</title>
      </Head>
      <img src={data?.Product?.photo?.image?.publicUrlTransformed} alt={data?.Product?.photo?.altText} />
      <div className="details">
        <h2>{data.Product.name}</h2>
        <p>{data.Product.description}</p>
      </div>
    </ProductStyles>
  );
}

export default SingleProduct;
