import { SyntheticEvent } from 'react';
import useForm from '../utils/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import { useRedeemPasswordResetMutation } from '../types/generated-queries';

function Reset({ token }: { token: string }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [
    redeemPasswordReset,
    { data, loading, error },
  ] = useRedeemPasswordResetMutation({
    variables: {
      email: inputs.email,
      password: inputs.password,
      token: inputs.token,
    },
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await redeemPasswordReset();
    resetForm();
  }

  const successfulError =
    data?.redeemUserPasswordResetToken?.code &&
    data.redeemUserPasswordResetToken;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Reset your password</h2>
      <DisplayError error={error || successfulError} />
      <fieldset disabled={loading} aria-busy={loading}>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! Please sign in to your account!</p>
        )}
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
        <button type="submit">Reset Password</button>
      </fieldset>
    </Form>
  );
}
export default Reset;
