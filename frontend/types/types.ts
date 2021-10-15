export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type CartItem = {
  __typename?: "CartItem";
  id: Scalars["ID"];
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
};

export type CartItemCreateInput = {
  product?: Maybe<ProductRelateToOneForCreateInput>;
  quantity?: Maybe<Scalars["Int"]>;
  user?: Maybe<UserRelateToOneForCreateInput>;
};

export type CartItemManyRelationFilter = {
  every?: Maybe<CartItemWhereInput>;
  none?: Maybe<CartItemWhereInput>;
  some?: Maybe<CartItemWhereInput>;
};

export type CartItemOrderByInput = {
  id?: Maybe<OrderDirection>;
  quantity?: Maybe<OrderDirection>;
};

export type CartItemRelateToManyForCreateInput = {
  connect?: Maybe<Array<CartItemWhereUniqueInput>>;
  create?: Maybe<Array<CartItemCreateInput>>;
};

export type CartItemRelateToManyForUpdateInput = {
  connect?: Maybe<Array<CartItemWhereUniqueInput>>;
  create?: Maybe<Array<CartItemCreateInput>>;
  disconnect?: Maybe<Array<CartItemWhereUniqueInput>>;
  set?: Maybe<Array<CartItemWhereUniqueInput>>;
};

export type CartItemUpdateArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateInput = {
  product?: Maybe<ProductRelateToOneForUpdateInput>;
  quantity?: Maybe<Scalars["Int"]>;
  user?: Maybe<UserRelateToOneForUpdateInput>;
};

export type CartItemWhereInput = {
  AND?: Maybe<Array<CartItemWhereInput>>;
  NOT?: Maybe<Array<CartItemWhereInput>>;
  OR?: Maybe<Array<CartItemWhereInput>>;
  id?: Maybe<IdFilter>;
  product?: Maybe<ProductWhereInput>;
  quantity?: Maybe<IntNullableFilter>;
  user?: Maybe<UserWhereInput>;
};

export type CartItemWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: Maybe<Scalars["String"]>;
  aspect_ratio?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  border?: Maybe<Scalars["String"]>;
  color?: Maybe<Scalars["String"]>;
  color_space?: Maybe<Scalars["String"]>;
  crop?: Maybe<Scalars["String"]>;
  default_image?: Maybe<Scalars["String"]>;
  delay?: Maybe<Scalars["String"]>;
  density?: Maybe<Scalars["String"]>;
  dpr?: Maybe<Scalars["String"]>;
  effect?: Maybe<Scalars["String"]>;
  fetch_format?: Maybe<Scalars["String"]>;
  flags?: Maybe<Scalars["String"]>;
  format?: Maybe<Scalars["String"]>;
  gravity?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["String"]>;
  opacity?: Maybe<Scalars["String"]>;
  overlay?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["String"]>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: Maybe<Scalars["String"]>;
  quality?: Maybe<Scalars["String"]>;
  radius?: Maybe<Scalars["String"]>;
  transformation?: Maybe<Scalars["String"]>;
  underlay?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["String"]>;
  y?: Maybe<Scalars["String"]>;
  zoom?: Maybe<Scalars["String"]>;
};

export type CloudinaryImage_File = {
  __typename?: "CloudinaryImage_File";
  encoding?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  mimetype?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  publicUrl?: Maybe<Scalars["String"]>;
  publicUrlTransformed?: Maybe<Scalars["String"]>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<DateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type IdFilter = {
  equals?: Maybe<Scalars["ID"]>;
  gt?: Maybe<Scalars["ID"]>;
  gte?: Maybe<Scalars["ID"]>;
  in?: Maybe<Array<Scalars["ID"]>>;
  lt?: Maybe<Scalars["ID"]>;
  lte?: Maybe<Scalars["ID"]>;
  not?: Maybe<IdFilter>;
  notIn?: Maybe<Array<Scalars["ID"]>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  not?: Maybe<IntNullableFilter>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  enableSessionItem: Scalars["Boolean"];
  enableSignout: Scalars["Boolean"];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars["Int"]>;
  fieldMeta?: Maybe<Scalars["JSON"]>;
  isFilterable: Scalars["Boolean"];
  isOrderable: Scalars["Boolean"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars["Int"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  description?: Maybe<Scalars["String"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  initialColumns: Array<Scalars["String"]>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
  itemQueryName: Scalars["String"];
  key: Scalars["String"];
  label: Scalars["String"];
  labelField: Scalars["String"];
  listQueryName: Scalars["String"];
  pageSize: Scalars["Int"];
  path: Scalars["String"];
  plural: Scalars["String"];
  singular: Scalars["String"];
};

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  direction: KeystoneAdminUiSortDirection;
  field: Scalars["String"];
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: "Mutation";
  addToCart?: Maybe<CartItem>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  checkout?: Maybe<Order>;
  createCartItem?: Maybe<CartItem>;
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  createOrders?: Maybe<Array<Maybe<Order>>>;
  createProduct?: Maybe<Product>;
  createProductImage?: Maybe<ProductImage>;
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteCartItem?: Maybe<CartItem>;
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deleteOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  deleteProduct?: Maybe<Product>;
  deleteProductImage?: Maybe<ProductImage>;
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars["Boolean"];
  updateCartItem?: Maybe<CartItem>;
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  updateProduct?: Maybe<Product>;
  updateProductImage?: Maybe<ProductImage>;
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAddToCartArgs = {
  productId?: Maybe<Scalars["ID"]>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCheckoutArgs = {
  token: Scalars["String"];
};

export type MutationCreateCartItemArgs = {
  data: CartItemCreateInput;
};

export type MutationCreateCartItemsArgs = {
  data: Array<CartItemCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};

export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};

export type MutationCreateOrderItemsArgs = {
  data: Array<OrderItemCreateInput>;
};

export type MutationCreateOrdersArgs = {
  data: Array<OrderCreateInput>;
};

export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};

export type MutationCreateProductImageArgs = {
  data: ProductImageCreateInput;
};

export type MutationCreateProductImagesArgs = {
  data: Array<ProductImageCreateInput>;
};

export type MutationCreateProductsArgs = {
  data: Array<ProductCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationDeleteCartItemArgs = {
  where: CartItemWhereUniqueInput;
};

export type MutationDeleteCartItemsArgs = {
  where: Array<CartItemWhereUniqueInput>;
};

export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};

export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};

export type MutationDeleteOrderItemsArgs = {
  where: Array<OrderItemWhereUniqueInput>;
};

export type MutationDeleteOrdersArgs = {
  where: Array<OrderWhereUniqueInput>;
};

export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};

export type MutationDeleteProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type MutationDeleteProductImagesArgs = {
  where: Array<ProductImageWhereUniqueInput>;
};

export type MutationDeleteProductsArgs = {
  where: Array<ProductWhereUniqueInput>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  token: Scalars["String"];
};

export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars["String"];
};

export type MutationUpdateCartItemArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};

export type MutationUpdateCartItemsArgs = {
  data: Array<CartItemUpdateArgs>;
};

export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type MutationUpdateOrderItemsArgs = {
  data: Array<OrderItemUpdateArgs>;
};

export type MutationUpdateOrdersArgs = {
  data: Array<OrderUpdateArgs>;
};

export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpdateProductImageArgs = {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
};

export type MutationUpdateProductImagesArgs = {
  data: Array<ProductImageUpdateArgs>;
};

export type MutationUpdateProductsArgs = {
  data: Array<ProductUpdateArgs>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
};

export type Order = {
  __typename?: "Order";
  charge?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  items?: Maybe<Array<OrderItem>>;
  itemsCount?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
};

export type OrderItemsArgs = {
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  where?: OrderItemWhereInput;
};

export type OrderItemsCountArgs = {
  where?: OrderItemWhereInput;
};

export type OrderCreateInput = {
  charge?: Maybe<Scalars["String"]>;
  items?: Maybe<OrderItemRelateToManyForCreateInput>;
  total?: Maybe<Scalars["Int"]>;
  user?: Maybe<UserRelateToOneForCreateInput>;
};

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type OrderItem = {
  __typename?: "OrderItem";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  order?: Maybe<Order>;
  photo?: Maybe<ProductImage>;
  price?: Maybe<Scalars["Int"]>;
  quantity?: Maybe<Scalars["Int"]>;
};

export type OrderItemCreateInput = {
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  order?: Maybe<OrderRelateToOneForCreateInput>;
  photo?: Maybe<ProductImageRelateToOneForCreateInput>;
  price?: Maybe<Scalars["Int"]>;
  quantity?: Maybe<Scalars["Int"]>;
};

export type OrderItemManyRelationFilter = {
  every?: Maybe<OrderItemWhereInput>;
  none?: Maybe<OrderItemWhereInput>;
  some?: Maybe<OrderItemWhereInput>;
};

export type OrderItemOrderByInput = {
  description?: Maybe<OrderDirection>;
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  price?: Maybe<OrderDirection>;
  quantity?: Maybe<OrderDirection>;
};

export type OrderItemRelateToManyForCreateInput = {
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  create?: Maybe<Array<OrderItemCreateInput>>;
};

export type OrderItemRelateToManyForUpdateInput = {
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  create?: Maybe<Array<OrderItemCreateInput>>;
  disconnect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  set?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemUpdateArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateInput = {
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  order?: Maybe<OrderRelateToOneForUpdateInput>;
  photo?: Maybe<ProductImageRelateToOneForUpdateInput>;
  price?: Maybe<Scalars["Int"]>;
  quantity?: Maybe<Scalars["Int"]>;
};

export type OrderItemWhereInput = {
  AND?: Maybe<Array<OrderItemWhereInput>>;
  NOT?: Maybe<Array<OrderItemWhereInput>>;
  OR?: Maybe<Array<OrderItemWhereInput>>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IdFilter>;
  name?: Maybe<StringFilter>;
  order?: Maybe<OrderWhereInput>;
  photo?: Maybe<ProductImageWhereInput>;
  price?: Maybe<IntNullableFilter>;
  quantity?: Maybe<IntNullableFilter>;
};

export type OrderItemWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type OrderManyRelationFilter = {
  every?: Maybe<OrderWhereInput>;
  none?: Maybe<OrderWhereInput>;
  some?: Maybe<OrderWhereInput>;
};

export type OrderOrderByInput = {
  charge?: Maybe<OrderDirection>;
  id?: Maybe<OrderDirection>;
  total?: Maybe<OrderDirection>;
};

export type OrderRelateToManyForCreateInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateInput>>;
};

export type OrderRelateToManyForUpdateInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderRelateToOneForCreateInput = {
  connect?: Maybe<OrderWhereUniqueInput>;
  create?: Maybe<OrderCreateInput>;
};

export type OrderRelateToOneForUpdateInput = {
  connect?: Maybe<OrderWhereUniqueInput>;
  create?: Maybe<OrderCreateInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
};

export type OrderUpdateArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateInput = {
  charge?: Maybe<Scalars["String"]>;
  items?: Maybe<OrderItemRelateToManyForUpdateInput>;
  total?: Maybe<Scalars["Int"]>;
  user?: Maybe<UserRelateToOneForUpdateInput>;
};

export type OrderWhereInput = {
  AND?: Maybe<Array<OrderWhereInput>>;
  NOT?: Maybe<Array<OrderWhereInput>>;
  OR?: Maybe<Array<OrderWhereInput>>;
  charge?: Maybe<StringFilter>;
  id?: Maybe<IdFilter>;
  items?: Maybe<OrderItemManyRelationFilter>;
  total?: Maybe<IntNullableFilter>;
  user?: Maybe<UserWhereInput>;
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type PasswordFilter = {
  isSet: Scalars["Boolean"];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = "FAILURE",
  TokenExpired = "TOKEN_EXPIRED",
  TokenRedeemed = "TOKEN_REDEEMED",
}

export type PasswordState = {
  __typename?: "PasswordState";
  isSet: Scalars["Boolean"];
};

export type Product = {
  __typename?: "Product";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<ProductImage>;
  price?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
};

export type ProductCreateInput = {
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<ProductImageRelateToOneForCreateInput>;
  price?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
};

export type ProductImage = {
  __typename?: "ProductImage";
  altText?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<CloudinaryImage_File>;
  product?: Maybe<Product>;
};

export type ProductImageCreateInput = {
  altText?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["Upload"]>;
  product?: Maybe<ProductRelateToOneForCreateInput>;
};

export type ProductImageOrderByInput = {
  altText?: Maybe<OrderDirection>;
  id?: Maybe<OrderDirection>;
};

export type ProductImageRelateToOneForCreateInput = {
  connect?: Maybe<ProductImageWhereUniqueInput>;
  create?: Maybe<ProductImageCreateInput>;
};

export type ProductImageRelateToOneForUpdateInput = {
  connect?: Maybe<ProductImageWhereUniqueInput>;
  create?: Maybe<ProductImageCreateInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
};

export type ProductImageUpdateArgs = {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
};

export type ProductImageUpdateInput = {
  altText?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["Upload"]>;
  product?: Maybe<ProductRelateToOneForUpdateInput>;
};

export type ProductImageWhereInput = {
  AND?: Maybe<Array<ProductImageWhereInput>>;
  NOT?: Maybe<Array<ProductImageWhereInput>>;
  OR?: Maybe<Array<ProductImageWhereInput>>;
  altText?: Maybe<StringFilter>;
  id?: Maybe<IdFilter>;
  product?: Maybe<ProductWhereInput>;
};

export type ProductImageWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type ProductOrderByInput = {
  description?: Maybe<OrderDirection>;
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  price?: Maybe<OrderDirection>;
  status?: Maybe<OrderDirection>;
};

export type ProductRelateToOneForCreateInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  create?: Maybe<ProductCreateInput>;
};

export type ProductRelateToOneForUpdateInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  create?: Maybe<ProductCreateInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
};

export type ProductUpdateArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateInput = {
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<ProductImageRelateToOneForUpdateInput>;
  price?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IdFilter>;
  name?: Maybe<StringFilter>;
  photo?: Maybe<ProductImageWhereInput>;
  price?: Maybe<IntNullableFilter>;
  status?: Maybe<StringNullableFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  authenticatedItem?: Maybe<AuthenticatedItem>;
  cartItem?: Maybe<CartItem>;
  cartItems?: Maybe<Array<CartItem>>;
  cartItemsCount?: Maybe<Scalars["Int"]>;
  keystone: KeystoneMeta;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems?: Maybe<Array<OrderItem>>;
  orderItemsCount?: Maybe<Scalars["Int"]>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars["Int"]>;
  product?: Maybe<Product>;
  productImage?: Maybe<ProductImage>;
  productImages?: Maybe<Array<ProductImage>>;
  productImagesCount?: Maybe<Scalars["Int"]>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars["Int"]>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};

export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};

export type QueryCartItemsArgs = {
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  where?: CartItemWhereInput;
};

export type QueryCartItemsCountArgs = {
  where?: CartItemWhereInput;
};

export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};

export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};

export type QueryOrderItemsArgs = {
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  where?: OrderItemWhereInput;
};

export type QueryOrderItemsCountArgs = {
  where?: OrderItemWhereInput;
};

export type QueryOrdersArgs = {
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  where?: OrderWhereInput;
};

export type QueryOrdersCountArgs = {
  where?: OrderWhereInput;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type QueryProductImagesArgs = {
  orderBy?: Array<ProductImageOrderByInput>;
  skip?: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  where?: ProductImageWhereInput;
};

export type QueryProductImagesCountArgs = {
  where?: ProductImageWhereInput;
};

export type QueryProductsArgs = {
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  where?: ProductWhereInput;
};

export type QueryProductsCountArgs = {
  where?: ProductWhereInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars["String"];
  token: Scalars["String"];
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: "RedeemUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: Scalars["String"];
};

export type StringFilter = {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  cart?: Maybe<Array<CartItem>>;
  cartCount?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars["Int"]>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars["DateTime"]>;
  passwordResetRedeemedAt?: Maybe<Scalars["DateTime"]>;
  passwordResetToken?: Maybe<PasswordState>;
};

export type UserCartArgs = {
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  where?: CartItemWhereInput;
};

export type UserCartCountArgs = {
  where?: CartItemWhereInput;
};

export type UserOrdersArgs = {
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  where?: OrderWhereInput;
};

export type UserOrdersCountArgs = {
  where?: OrderWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  message: Scalars["String"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"];
};

export type UserCreateInput = {
  cart?: Maybe<CartItemRelateToManyForCreateInput>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  orders?: Maybe<OrderRelateToManyForCreateInput>;
  password?: Maybe<Scalars["String"]>;
  passwordResetIssuedAt?: Maybe<Scalars["DateTime"]>;
  passwordResetRedeemedAt?: Maybe<Scalars["DateTime"]>;
  passwordResetToken?: Maybe<Scalars["String"]>;
};

export type UserOrderByInput = {
  email?: Maybe<OrderDirection>;
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  passwordResetIssuedAt?: Maybe<OrderDirection>;
  passwordResetRedeemedAt?: Maybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  cart?: Maybe<CartItemRelateToManyForUpdateInput>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  orders?: Maybe<OrderRelateToManyForUpdateInput>;
  password?: Maybe<Scalars["String"]>;
  passwordResetIssuedAt?: Maybe<Scalars["DateTime"]>;
  passwordResetRedeemedAt?: Maybe<Scalars["DateTime"]>;
  passwordResetToken?: Maybe<Scalars["String"]>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  cart?: Maybe<CartItemManyRelationFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IdFilter>;
  name?: Maybe<StringFilter>;
  orders?: Maybe<OrderManyRelationFilter>;
  password?: Maybe<PasswordFilter>;
  passwordResetIssuedAt?: Maybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: Maybe<DateTimeNullableFilter>;
  passwordResetToken?: Maybe<PasswordFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: "ValidateUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: Scalars["String"];
};
