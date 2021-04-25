import { KeystoneContext } from "@keystone-next/types";
import { Session } from "../types";
import { CartItemCreateInput, CartItemsUpdateInput } from "../node_modules/.keystone/types";

async function addToCart(
  _root: unknown,
  { productId }: { productId: string },
  context: KeystoneContext,
): Promise<CartItemCreateInput> {
  const sesh = context.session as Session;

  if (!sesh.itemId) {
    throw new Error("You must be logged in to do this!");
  }

  type AllCartItems = CartItemCreateInput[] & CartItemsUpdateInput[];

  const allCartItems = (await context.lists.CartItem.findMany({
    where: {
      user: {
        id: sesh.itemId,
      },
      product: {
        id: productId,
      },
    },
    query: "id quantity",
  })) as AllCartItems;

  const [existingCartItem] = allCartItems;

  if (existingCartItem) {
    return context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }

  return context.lists.CartItem.createOne({
    data: {
      product: {
        connect: { id: productId },
      },
      user: {
        connect: { id: sesh.itemId },
      },
    },
    resolveFields: false,
  });
}

export default addToCart;
