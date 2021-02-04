import Head from 'next/head';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import { useAllProductsCountQuery } from '../types/generated-queries';
import { perPage } from '../config';

function Pagination({ page }: { page: number }) {
  const { data, loading, error } = useAllProductsCountQuery();

  if (loading) return <p>Loading....</p>;

  if (error) return <DisplayError error={error} />;

  const count = data?._allProductsMeta?.count;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>🠔 Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next 🠖</a>
      </Link>
    </PaginationStyles>
  );
}

export default Pagination;
