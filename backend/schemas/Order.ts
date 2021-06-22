import { list } from "@keystone-next/keystone/schema";
import { integer, relationship, text, virtual } from "@keystone-next/fields";
import { schema } from "@keystone-next/types";
import formatMoney from "../lib/formatMoney";

export const Order = list({
  fields: {
    label: virtual({
      field: schema.field({
        type: schema.String,
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
