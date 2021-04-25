/* eslint no-console: 0 */
import { KeystoneContext } from "@keystone-next/types";
import { products } from "./data";

export async function insertSeedData(context: KeystoneContext) {
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  const { prisma } = context.keystone.adapter;

  for await (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);
    const { id } = await prisma.productImage.create({
      data: { image: JSON.stringify(product.photo), altText: product.description },
    });

    delete product.photo;
    product.photoId = id;
    await prisma.product.create({ data: product });
  }

  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);

  process.exit();
}
