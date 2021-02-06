import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

type ResetPageProps = {
  query: {
    token: string;
  };
};

function ResetPage({ query }: ResetPageProps) {
  if (!query?.token) {
    return (
      <div>
        <p>Sorry you must supply a token</p>
        <RequestReset />
      </div>
    );
  }

  return (
    <div>
      <p>Reset your password</p>
      <Reset token={query.token} />
    </div>
  );
}

export default ResetPage;
