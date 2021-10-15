/*
  Warnings:

  - Made the column `charge` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `altText` on table `ProductImage` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CartItem" ALTER COLUMN "quantity" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "charge" SET NOT NULL,
ALTER COLUMN "charge" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DEFAULT E'',
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT E'',
ALTER COLUMN "quantity" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DEFAULT E'',
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT E'',
ALTER COLUMN "status" SET DEFAULT E'DRAFT';

-- AlterTable
ALTER TABLE "ProductImage" ALTER COLUMN "altText" SET NOT NULL,
ALTER COLUMN "altText" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DEFAULT E'',
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "email" SET DEFAULT E'';

-- RenameIndex
ALTER INDEX "CartItem.product_index" RENAME TO "CartItem_product_idx";

-- RenameIndex
ALTER INDEX "CartItem.user_index" RENAME TO "CartItem_user_idx";

-- RenameIndex
ALTER INDEX "Order.user_index" RENAME TO "Order_user_idx";

-- RenameIndex
ALTER INDEX "OrderItem.order_index" RENAME TO "OrderItem_order_idx";

-- RenameIndex
ALTER INDEX "OrderItem.photo_index" RENAME TO "OrderItem_photo_idx";

-- RenameIndex
ALTER INDEX "Product.photo_unique" RENAME TO "Product_photo_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";
