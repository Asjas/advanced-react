import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import addToCart from './addToCart';

const gql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: gql`
    type Mutation {
      addToCart(productId: ID): CartItem
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
    }
  }
})
