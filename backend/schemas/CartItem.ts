import { list } from "@keystone-next/keystone";
import { integer, relationship } from "@keystone-next/keystone/fields";

export const CartItem = list({
  fields: {
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
    product: relationship({ ref: "Product" }),
    user: relationship({ ref: "User.cart" }),
  },
  ui: {
    listView: {
      initialColumns: ["product", "quantity", "user"],
    },
  },
});
