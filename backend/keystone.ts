import "dotenv/config";
import { config } from "@keystone-next/keystone";
import { createAuth } from "@keystone-next/auth";
import { statelessSessions } from "@keystone-next/keystone/session";

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
  secret:
    process.env.COOKIE_SECRET || "dafj80934j90j9fASDJ()jd9032jd0SAJD9JASDjaskldjlkasJDIASODJ)(@J90jsadlkj8jvvije8rj8j",
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
  sessionData: `id name email`,
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL, process.env.APOLLO_STUDIO],
        credentials: true,
      },
      healthCheck: {
        path: "/my-health-check",
        data: { status: "healthy" },
      },
      maxFileSize: 20000000,
    },
    db: process.env.DATABASE_URL
      ? {
          provider: "postgresql",
          url: process.env.DATABASE_URL,
          useMigrations: true,
          async onConnect(keystone) {
            console.log("Connected to the database!");
            if (process.argv.includes("--seed-data")) {
              await insertSeedData(keystone);
            }
          },
        }
      : {
          provider: "sqlite",
          useMigrations: true,
          url: databaseURL,
          async onConnect(keystone) {
            console.log("Connected to the database!");
            if (process.argv.includes("--seed-data")) {
              await insertSeedData(keystone);
            }
          },
        },
    graphql: {
      cors: {
        origin: [process.env.FRONTEND_URL, process.env.APOLLO_STUDIO],
        credentials: true,
      },
      apolloConfig: {
        introspection: true,
      },
      queryLimits: {
        maxTotalResults: 100,
      },
    },
    lists: {
      User,
      Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
    },
    extendGraphqlSchema,
    ui: {
      isAccessAllowed: ({ session }) => session?.data,
    },
    session: statelessSessions(sessionConfig),
  }),
);
