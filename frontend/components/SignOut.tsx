import { refetchUserQuery, useSignOutMutation } from '../types/generated-queries';

function SignOut() {
  const [signOut] = useSignOutMutation({
    refetchQueries: [refetchUserQuery()],
  });

  async function handleClick() {
    await signOut();
  }

  return (
    <button type="button" onClick={handleClick}>
      Sign Out
    </button>
  );
}

export default SignOut;
