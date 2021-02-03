import Head from 'next/head';
import Products from '../components/Products';

function ProductsPage() {
  return (
    <div>
      <Head>
        <title>Sick Fits | Products</title>
      </Head>
      <Products />
    </div>
  );
}

export default ProductsPage;
