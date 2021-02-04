import Pagination from '../components/Pagination';
import Products from '../components/Products';

function ProductsPage() {
  return (
    <div>
      <Pagination page={1} />
      <Products />
    </div>
  );
}

export default ProductsPage;
