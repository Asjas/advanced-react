import Head from 'next/head';
import UpdateProduct from '../components/UpdateProduct';

type UpdateProductPageProps = {
  query: {
    id: string;
  };
};

function UpdatePage({ query }: UpdateProductPageProps) {
  return (
    <div>
      <Head>
        <title>Sick Fits | Sell</title>
      </Head>
      <UpdateProduct id={query.id} />
    </div>
  );
}

export default UpdatePage;
