import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, text } from '@keystone-next/fields';

export const OrderItem = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'ProductImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: {
          fields: ['image', 'altText'],
        },
        inlineEdit: {
          fields: ['image', 'altText'],
        },
      },
    }),
    price: integer(),
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
    order: relationship({ ref: 'Order.items' }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'name', 'photo', 'price', 'quantity'],
    },
  },
});
