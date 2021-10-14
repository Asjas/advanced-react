// @ts-nocheck

import casual from "casual";

// seed it so we get consistent results
casual.seed(777);

const fakeItem = () => ({
  // __typename: 'Item',
  id: "abc123",
  price: 5000,
  user: null,
  photo: {
    id: "abc123",
    image: {
      publicUrlTransformed: "dog.jpg",
    },
  },
  name: "dogs are best",
  description: "dogs",
});

const fakeUser = (overrides) => ({
  // __typename: 'User',
  id: "4234",
  name: casual.name,
  email: casual.email,
  permissions: ["ADMIN"],
  orders: [],
  cart: [],
  ...overrides,
});

const fakeOrderItem = () => ({
  // __typename: 'OrderItem',
  id: casual.uuid,
  image: `${casual.word}.jpg`,
  name: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
});

const fakeOrder = () => ({
  // __typename: 'Order',
  id: "ord123",
  charge: "ch_123",
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: "2022-12-11T20:16:13.797Z",
  user: fakeUser(),
});

const fakeCartItem = (overrides) => ({
  __typename: "CartItem",
  id: "omg123",
  quantity: 3,
  item: fakeItem(),
  user: fakeUser(),
  ...overrides,
});

// Fake LocalStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

export { LocalStorageMock, fakeItem, fakeUser, fakeCartItem, fakeOrder, fakeOrderItem };
