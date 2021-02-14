import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

type ProductPageProps = {
  query: {
    page?: string;
  };
};

function ProductsPage({ query }: ProductPageProps) {
  return (
    <>
      <Pagination page={Number(query.page) || 1} />
      <Products page={Number(query.page) || 1} />
      <Pagination page={Number(query.page) || 1} />
    </>
  );
}

export default ProductsPage;
