import Head from 'next/head';
import CreateProduct from '../components/CreateProduct';

function SellPage() {
  return (
    <div>
      <Head>
        <title>Sick Fits | Sell</title>
      </Head>
      <CreateProduct />
    </div>
  );
}

export default SellPage;
