import { KeystoneContext } from "@keystone-next/types";
import { Session } from "../types";
// import { CartItemCreateInput, OrderCreateInput } from "../node_modules/.keystone/types";
import stripeConfig from "../lib/stripe";

const gql = String.raw;

interface Arguments {
  token: string;
}

async function checkout(_root: unknown, { token }: Arguments, context: KeystoneContext): Promise<any> {
  const sesh = context.session as Session;

  if (!sesh.itemId) {
    throw new Error("Sorry! You must be signed in to create an order!");
  }

  const user = await context.lists.User.findOne({
    where: { id: sesh.itemId },
    query: gql`
      id
      name
      email
      cart {
        id
        quantity
        product {
          id
          name
          price
          description
          photo {
            id
            image {
              id
              publicUrlTransformed
            }
          }
        }
      }
    `,
  });

  const cartItems = user.cart.filter((cartItem) => cartItem.product);

  const amount = cartItems.reduce(
    (tally: number, cartItem: any) => tally + cartItem.quantity * cartItem.product.price,
    0,
  );

  const charge = await stripeConfig.paymentIntents
    .create({
      amount,
      currency: "USD",
      confirm: true,
      payment_method: token,
    })
    .catch((err) => {
      throw new Error(err);
    });

  const orderItems = cartItems.map((cartItem) => {
    const orderItem = {
      name: cartItem.product.name,
      description: cartItem.product.description,
      price: cartItem.product.price,
      quantity: cartItem.quantity,
      photo: { connect: { id: cartItem.product.photo.id } },
    };

    return orderItem;
  });

  const order = await context.db.lists.Order.createOne({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: { create: orderItems },
      user: { connect: { id: sesh.itemId } },
    },
  });

  const cartItemsIds = user.cart.map((cartItem) => cartItem.id);
  await context.lists.CartItem.deleteMany({
    ids: cartItemsIds,
  });

  return order;
}

export default checkout;
