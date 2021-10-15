import { list, graphql } from "@keystone-next/keystone";
import { integer, relationship, text, virtual } from "@keystone-next/keystone/fields";
import formatMoney from "../lib/formatMoney";

export const Order = list({
  fields: {
    label: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve(item) {
          return `${formatMoney((item as any).total)}`;
        },
      }),
    }),
    total: integer(),
    items: relationship({ ref: "OrderItem.order", many: true }),
    user: relationship({ ref: "User.orders" }),
    charge: text(),
  },
  ui: {
    listView: {
      initialColumns: ["label", "user", "items", "total", "charge"],
    },
  },
});
