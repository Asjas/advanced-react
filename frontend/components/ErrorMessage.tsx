import { ApolloError } from '@apollo/client';
import styled from 'styled-components';
import {
  UserAuthenticationWithPasswordFailure,
  RedeemUserPasswordResetTokenResult,
} from '../types/generated-queries';

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

type DisplayErrorProps = {
  error:
    | ApolloError
    | UserAuthenticationWithPasswordFailure
    | RedeemUserPasswordResetTokenResult;
};

const DisplayError = ({ error }: DisplayErrorProps) => {
  if (!error || !error.message) return null;
  if (
    error instanceof ApolloError &&
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

export default DisplayError;
