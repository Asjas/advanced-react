import { KeystoneContext } from "@keystone-next/keystone/types";
import { Session } from "../types";

async function addToCart(_root: unknown, { productId }: { productId: string }, context: KeystoneContext): Promise<any> {
  const sesh = context.session as Session;

  if (!sesh?.itemId) {
    throw new Error("You must be logged in to do this!");
  }

  // type AllCartItems = CartItemCreateInput[] & CartItemsUpdateInput[];

  const allCartItems = await context.query.CartItem.findMany({
    where: { user: { id: { equals: sesh.itemId } }, product: { id: { equals: productId } } },
    query: "id quantity",
  });

  const [existingCartItem] = allCartItems;

  if (existingCartItem) {
    return await context.db.CartItem.updateOne({
      where: { id: existingCartItem.id },
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }

  return await context.db.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}

export default addToCart;
