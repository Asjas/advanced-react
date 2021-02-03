import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions} from '@keystone-next/keystone/session'

import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';

import { insertSeedData } from './seed-data';

const THIRTY_DAYS = 60 * 60 * 24 * 30;
const databaseURL = process.env.DATABASE_URL || 'test';

const sessionConfig = {
  maxAge: THIRTY_DAYS,
  secret: process.env.COOKIE_SECRET || 'secret',
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  }
})

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    async onConnect(keystone) {
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    },
  },
  lists: createSchema({
    User,
    Product,
    ProductImage,
  }),
  ui: {
    isAccessAllowed: ({ session }) => {

      return session?.data;
    },
  },
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`
  })
}));
