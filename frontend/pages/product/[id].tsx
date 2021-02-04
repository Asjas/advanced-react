import SingleProduct from '../../components/SingleProduct';

type SingleProductPageProps = {
  query: {
    id: string;
  };
};

function SingleProductPage({ query }: SingleProductPageProps) {
  return <SingleProduct id={query.id} />;
}

export default SingleProductPage;
