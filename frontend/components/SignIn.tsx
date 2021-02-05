import { SyntheticEvent } from 'react';
import useForm from '../utils/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import {
  useSignInMutation,
  refetchUserQuery,
} from '../types/generated-queries';

function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [signIn, { data, loading }] = useSignInMutation({
    variables: { email: inputs.email, password: inputs.password },
    refetchQueries: [refetchUserQuery()],
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await signIn();
    resetForm();
  }

  const error =
    data?.authenticateUserWithPassword.__typename ===
      'UserAuthenticationWithPasswordFailure' &&
    data.authenticateUserWithPassword;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Into Your Account</h2>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </fieldset>
    </Form>
  );
}
export default SignIn;
