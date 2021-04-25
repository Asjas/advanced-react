import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import { withItemData, statelessSessions } from "@keystone-next/keystone/session";

import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import { OrderItem } from "./schemas/OrderItem";
import { Order } from "./schemas/Order";
import { CartItem } from "./schemas/CartItem";

import { insertSeedData } from "./seed-data";
import { sendPasswordResetEmail } from "./lib/mail";

import { extendGraphqlSchema } from "./mutations";

const THIRTY_DAYS = 60 * 60 * 24 * 30;
const databaseURL = process.env.DATABASE_URL || "file:./keystone.db";

const sessionConfig = {
  maxAge: THIRTY_DAYS,
  secret: process.env.COOKIE_SECRET || "secret",
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: process.env.DATABASE_URL
      ? { provider: "postgresql", url: process.env.DATABASE_URL }
      : {
          provider: "sqlite",
          url: databaseURL,
          async onConnect(keystone) {
            console.log("Connected to the database!");
            if (process.argv.includes("--seed-data")) {
              await insertSeedData(keystone);
            }
          },
        },
    graphql: {
      queryLimits: {
        maxTotalResults: 100,
      },
    },
    experimental: {
      generateNextGraphqlAPI: true,
      enableNextJsGraphqlApiEndpoint: true,
    },
    lists: createSchema({
      User,
      Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
    }),
    extendGraphqlSchema,
    ui: {
      isAccessAllowed: ({ session }) => session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: "id",
    }),
  }),
);
