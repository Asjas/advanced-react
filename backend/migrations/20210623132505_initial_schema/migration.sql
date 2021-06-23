-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "passwordResetToken" TEXT,
    "passwordResetIssuedAt" DATETIME,
    "passwordResetRedeemedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "description" TEXT,
    "photo" INTEGER,
    "status" TEXT,
    "price" INTEGER,
    FOREIGN KEY ("photo") REFERENCES "ProductImage" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT,
    "altText" TEXT
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER,
    "product" INTEGER,
    "user" INTEGER,
    FOREIGN KEY ("product") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("user") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "description" TEXT,
    "photo" INTEGER,
    "price" INTEGER,
    "quantity" INTEGER,
    "order" INTEGER,
    FOREIGN KEY ("photo") REFERENCES "ProductImage" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("order") REFERENCES "Order" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total" INTEGER,
    "user" INTEGER,
    "charge" TEXT,
    FOREIGN KEY ("user") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product.photo_unique" ON "Product"("photo");

-- CreateIndex
CREATE INDEX "CartItem.product_index" ON "CartItem"("product");

-- CreateIndex
CREATE INDEX "CartItem.user_index" ON "CartItem"("user");

-- CreateIndex
CREATE INDEX "OrderItem.photo_index" ON "OrderItem"("photo");

-- CreateIndex
CREATE INDEX "OrderItem.order_index" ON "OrderItem"("order");

-- CreateIndex
CREATE INDEX "Order.user_index" ON "Order"("user");
