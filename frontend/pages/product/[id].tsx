import SingleProduct from '../../components/SingleProduct';

type SingleProductsPageProps = {
  query: {
    id: string;
  };
};

function SingleProductPage({ query }: SingleProductsPageProps) {
  return <SingleProduct id={query.id} />;
}

export default SingleProductPage;
