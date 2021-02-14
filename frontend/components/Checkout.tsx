import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe, StripeError } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../hooks/Cart';
import {
  useCreateOrderMutation,
  refetchUserQuery,
} from '../types/generated-queries';
import SickButton from './styles/SickButton';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const ErrorStyles = styled.p`
  font-size: 14px;
  color: var(--red);
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState<StripeError>();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { closeCart } = useCart();

  const [createOrder, { error: orderError }] = useCreateOrderMutation();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    setLoading(true);
    nProgress.start();

    const {
      error: stripeError,
      paymentMethod,
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (stripeError) {
      setError(stripeError);
      return;
    }

    const order = await createOrder({
      variables: { token: paymentMethod.id },
      refetchQueries: [refetchUserQuery()],
    });

    void router.push({
      pathname: '/order/[id]',
      query: { id: order.data.checkout.id },
    });

    closeCart();

    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error ? <ErrorStyles>{error.message}</ErrorStyles> : null}
      {orderError ? <ErrorStyles>{orderError.message}</ErrorStyles> : null}
      <CardElement />
      <SickButton>Checkout Now</SickButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

export default Checkout;
