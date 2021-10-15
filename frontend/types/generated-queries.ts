import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from "@apollo/client/cache";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
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

export type AddToCartMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type AddToCartMutation = {
  __typename?: "Mutation";
  addToCart?: { __typename?: "CartItem"; id: string } | null | undefined;
};

export type AllOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type AllOrdersQuery = {
  __typename?: "Query";
  orders?:
    | Array<{
        __typename?: "Order";
        id: string;
        charge?: string | null | undefined;
        total?: number | null | undefined;
        user?: { __typename?: "User"; id: string } | null | undefined;
        items?:
          | Array<{
              __typename?: "OrderItem";
              id: string;
              name?: string | null | undefined;
              description?: string | null | undefined;
              price?: number | null | undefined;
              quantity?: number | null | undefined;
              photo?:
                | {
                    __typename?: "ProductImage";
                    altText?: string | null | undefined;
                    image?:
                      | { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null | undefined }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
            }>
          | null
          | undefined;
      }>
    | null
    | undefined;
};

export type AllProductsQueryVariables = Exact<{
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
}>;

export type AllProductsQuery = {
  __typename?: "Query";
  products?:
    | Array<{
        __typename?: "Product";
        id: string;
        name?: string | null | undefined;
        description?: string | null | undefined;
        price?: number | null | undefined;
        photo?:
          | {
              __typename?: "ProductImage";
              id: string;
              altText?: string | null | undefined;
              image?:
                | { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null | undefined }
                | null
                | undefined;
            }
          | null
          | undefined;
      }>
    | null
    | undefined;
};

export type AllProductsCountQueryVariables = Exact<{ [key: string]: never }>;

export type AllProductsCountQuery = { __typename?: "Query"; productsCount?: number | null | undefined };

export type CreateOrderMutationVariables = Exact<{
  token: Scalars["String"];
}>;

export type CreateOrderMutation = {
  __typename?: "Mutation";
  checkout?:
    | {
        __typename?: "Order";
        id: string;
        charge?: string | null | undefined;
        total?: number | null | undefined;
        items?: Array<{ __typename?: "OrderItem"; id: string; name?: string | null | undefined }> | null | undefined;
      }
    | null
    | undefined;
};

export type CreateProductMutationVariables = Exact<{
  name: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["Int"];
  image?: Maybe<Scalars["Upload"]>;
}>;

export type CreateProductMutation = {
  __typename?: "Mutation";
  createProduct?: { __typename?: "Product"; id: string; name?: string | null | undefined } | null | undefined;
};

export type DeleteCartItemMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteCartItemMutation = {
  __typename?: "Mutation";
  deleteCartItem?: { __typename?: "CartItem"; id: string } | null | undefined;
};

export type DeleteProductMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteProductMutation = {
  __typename?: "Mutation";
  deleteProduct?: { __typename?: "Product"; id: string } | null | undefined;
};

export type GetOrderQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetOrderQuery = {
  __typename?: "Query";
  order?:
    | {
        __typename?: "Order";
        id: string;
        charge?: string | null | undefined;
        total?: number | null | undefined;
        user?: { __typename?: "User"; id: string } | null | undefined;
        items?:
          | Array<{
              __typename?: "OrderItem";
              id: string;
              name?: string | null | undefined;
              description?: string | null | undefined;
              price?: number | null | undefined;
              quantity?: number | null | undefined;
              photo?:
                | {
                    __typename?: "ProductImage";
                    altText?: string | null | undefined;
                    image?:
                      | { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null | undefined }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
            }>
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ProductQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ProductQuery = {
  __typename?: "Query";
  product?:
    | {
        __typename?: "Product";
        id: string;
        name?: string | null | undefined;
        description?: string | null | undefined;
        price?: number | null | undefined;
        photo?:
          | {
              __typename?: "ProductImage";
              altText?: string | null | undefined;
              image?:
                | { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null | undefined }
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  authenticatedItem?:
    | {
        __typename?: "User";
        id: string;
        name?: string | null | undefined;
        email?: string | null | undefined;
        cart?:
          | Array<{
              __typename?: "CartItem";
              id: string;
              quantity?: number | null | undefined;
              product?:
                | {
                    __typename?: "Product";
                    id: string;
                    name?: string | null | undefined;
                    description?: string | null | undefined;
                    price?: number | null | undefined;
                    photo?:
                      | {
                          __typename?: "ProductImage";
                          image?:
                            | { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null | undefined }
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
            }>
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type RequestResetMutationVariables = Exact<{
  email: Scalars["String"];
}>;

export type RequestResetMutation = { __typename?: "Mutation"; sendUserPasswordResetLink: boolean };

export type RedeemPasswordResetMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
  token: Scalars["String"];
}>;

export type RedeemPasswordResetMutation = {
  __typename?: "Mutation";
  redeemUserPasswordResetToken?:
    | { __typename?: "RedeemUserPasswordResetTokenResult"; code: PasswordResetRedemptionErrorCode; message: string }
    | null
    | undefined;
};

export type SearchProductsQueryVariables = Exact<{
  searchTerm: Scalars["String"];
}>;

export type SearchProductsQuery = {
  __typename?: "Query";
  searchTerms?:
    | Array<{
        __typename?: "Product";
        id: string;
        name?: string | null | undefined;
        photo?:
          | {
              __typename?: "ProductImage";
              altText?: string | null | undefined;
              image?:
                | { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null | undefined }
                | null
                | undefined;
            }
          | null
          | undefined;
      }>
    | null
    | undefined;
};

export type SignInMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword:
    | { __typename?: "UserAuthenticationWithPasswordFailure"; message: string }
    | {
        __typename?: "UserAuthenticationWithPasswordSuccess";
        item: { __typename?: "User"; id: string; email?: string | null | undefined; name?: string | null | undefined };
      };
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = { __typename?: "Mutation"; endSession: boolean };

export type SignUpMutationVariables = Exact<{
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  createUser?:
    | { __typename?: "User"; id: string; email?: string | null | undefined; name?: string | null | undefined }
    | null
    | undefined;
};

export type UpdateProductMutationVariables = Exact<{
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
}>;

export type UpdateProductMutation = {
  __typename?: "Mutation";
  updateProduct?:
    | {
        __typename?: "Product";
        id: string;
        name?: string | null | undefined;
        description?: string | null | undefined;
        price?: number | null | undefined;
      }
    | null
    | undefined;
};

export const AddToCartDocument = gql`
  mutation addToCart($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddToCartMutation(
  baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
}
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const AllOrdersDocument = gql`
  query allOrders {
    orders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

/**
 * __useAllOrdersQuery__
 *
 * To run a query within a React component, call `useAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllOrdersQuery(baseOptions?: Apollo.QueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
}
export function useAllOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
}
export type AllOrdersQueryHookResult = ReturnType<typeof useAllOrdersQuery>;
export type AllOrdersLazyQueryHookResult = ReturnType<typeof useAllOrdersLazyQuery>;
export type AllOrdersQueryResult = Apollo.QueryResult<AllOrdersQuery, AllOrdersQueryVariables>;
export function refetchAllOrdersQuery(variables?: AllOrdersQueryVariables) {
  return { query: AllOrdersDocument, variables: variables };
}
export const AllProductsDocument = gql`
  query allProducts($skip: Int = 0, $first: Int) {
    products(skip: $skip, take: $first) {
      id
      name
      description
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAllProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
}
export function useAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
}
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export function refetchAllProductsQuery(variables?: AllProductsQueryVariables) {
  return { query: AllProductsDocument, variables: variables };
}
export const AllProductsCountDocument = gql`
  query allProductsCount {
    productsCount
  }
`;

/**
 * __useAllProductsCountQuery__
 *
 * To run a query within a React component, call `useAllProductsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsCountQuery(
  baseOptions?: Apollo.QueryHookOptions<AllProductsCountQuery, AllProductsCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProductsCountQuery, AllProductsCountQueryVariables>(AllProductsCountDocument, options);
}
export function useAllProductsCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllProductsCountQuery, AllProductsCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProductsCountQuery, AllProductsCountQueryVariables>(AllProductsCountDocument, options);
}
export type AllProductsCountQueryHookResult = ReturnType<typeof useAllProductsCountQuery>;
export type AllProductsCountLazyQueryHookResult = ReturnType<typeof useAllProductsCountLazyQuery>;
export type AllProductsCountQueryResult = Apollo.QueryResult<AllProductsCountQuery, AllProductsCountQueryVariables>;
export function refetchAllProductsCountQuery(variables?: AllProductsCountQueryVariables) {
  return { query: AllProductsCountDocument, variables: variables };
}
export const CreateOrderDocument = gql`
  mutation createOrder($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
}
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateProductDocument = gql`
  mutation createProduct($name: String!, $description: String!, $price: Int!, $image: Upload) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
    }
  }
`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const DeleteCartItemDocument = gql`
  mutation deleteCartItem($id: ID!) {
    deleteCartItem(where: { id: $id }) {
      id
    }
  }
`;
export type DeleteCartItemMutationFn = Apollo.MutationFunction<DeleteCartItemMutation, DeleteCartItemMutationVariables>;

/**
 * __useDeleteCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemMutation, { data, loading, error }] = useDeleteCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCartItemMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteCartItemMutation, DeleteCartItemMutationVariables>(DeleteCartItemDocument, options);
}
export type DeleteCartItemMutationHookResult = ReturnType<typeof useDeleteCartItemMutation>;
export type DeleteCartItemMutationResult = Apollo.MutationResult<DeleteCartItemMutation>;
export type DeleteCartItemMutationOptions = Apollo.BaseMutationOptions<
  DeleteCartItemMutation,
  DeleteCartItemMutationVariables
>;
export const DeleteProductDocument = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(where: { id: $id }) {
      id
    }
  }
`;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
}
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;
export const GetOrderDocument = gql`
  query getOrder($id: ID!) {
    order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderQuery(baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
}
export function useGetOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
}
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<typeof useGetOrderLazyQuery>;
export type GetOrderQueryResult = Apollo.QueryResult<GetOrderQuery, GetOrderQueryVariables>;
export function refetchGetOrderQuery(variables?: GetOrderQueryVariables) {
  return { query: GetOrderDocument, variables: variables };
}
export const ProductDocument = gql`
  query Product($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
      price
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export function refetchProductQuery(variables?: ProductQueryVariables) {
  return { query: ProductDocument, variables: variables };
}
export const UserDocument = gql`
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        email
        cart {
          id
          quantity
          product {
            id
            name
            description
            price
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
  return { query: UserDocument, variables: variables };
}
export const RequestResetDocument = gql`
  mutation requestReset($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }
`;
export type RequestResetMutationFn = Apollo.MutationFunction<RequestResetMutation, RequestResetMutationVariables>;

/**
 * __useRequestResetMutation__
 *
 * To run a mutation, you first call `useRequestResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetMutation, { data, loading, error }] = useRequestResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetMutation(
  baseOptions?: Apollo.MutationHookOptions<RequestResetMutation, RequestResetMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RequestResetMutation, RequestResetMutationVariables>(RequestResetDocument, options);
}
export type RequestResetMutationHookResult = ReturnType<typeof useRequestResetMutation>;
export type RequestResetMutationResult = Apollo.MutationResult<RequestResetMutation>;
export type RequestResetMutationOptions = Apollo.BaseMutationOptions<
  RequestResetMutation,
  RequestResetMutationVariables
>;
export const RedeemPasswordResetDocument = gql`
  mutation redeemPasswordReset($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {
      code
      message
    }
  }
`;
export type RedeemPasswordResetMutationFn = Apollo.MutationFunction<
  RedeemPasswordResetMutation,
  RedeemPasswordResetMutationVariables
>;

/**
 * __useRedeemPasswordResetMutation__
 *
 * To run a mutation, you first call `useRedeemPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedeemPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [redeemPasswordResetMutation, { data, loading, error }] = useRedeemPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRedeemPasswordResetMutation(
  baseOptions?: Apollo.MutationHookOptions<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>(
    RedeemPasswordResetDocument,
    options,
  );
}
export type RedeemPasswordResetMutationHookResult = ReturnType<typeof useRedeemPasswordResetMutation>;
export type RedeemPasswordResetMutationResult = Apollo.MutationResult<RedeemPasswordResetMutation>;
export type RedeemPasswordResetMutationOptions = Apollo.BaseMutationOptions<
  RedeemPasswordResetMutation,
  RedeemPasswordResetMutationVariables
>;
export const SearchProductsDocument = gql`
  query searchProducts($searchTerm: String!) {
    searchTerms: products(
      where: { OR: [{ name: { equals: $searchTerm } }, { description: { equals: $searchTerm } }] }
    ) {
      id
      name
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSearchProductsQuery(
  baseOptions: Apollo.QueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
}
export function useSearchProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
}
export type SearchProductsQueryHookResult = ReturnType<typeof useSearchProductsQuery>;
export type SearchProductsLazyQueryHookResult = ReturnType<typeof useSearchProductsLazyQuery>;
export type SearchProductsQueryResult = Apollo.QueryResult<SearchProductsQuery, SearchProductsQueryVariables>;
export function refetchSearchProductsQuery(variables?: SearchProductsQueryVariables) {
  return { query: SearchProductsDocument, variables: variables };
}
export const SignInDocument = gql`
  mutation signIn($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
  mutation signOut {
    endSession
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const SignUpDocument = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      email
      name
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateProductDocument = gql`
  mutation updateProduct($id: ID!, $name: String, $description: String, $price: Int) {
    updateProduct(where: { id: $id }, data: { name: $name, description: $description, price: $price }) {
      id
      name
      description
      price
    }
  }
`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
}
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
export type CartItemKeySpecifier = ("id" | "product" | "quantity" | "user" | CartItemKeySpecifier)[];
export type CartItemFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  product?: FieldPolicy<any> | FieldReadFunction<any>;
  quantity?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CloudinaryImage_FileKeySpecifier = (
  | "encoding"
  | "filename"
  | "id"
  | "mimetype"
  | "originalFilename"
  | "publicUrl"
  | "publicUrlTransformed"
  | CloudinaryImage_FileKeySpecifier
)[];
export type CloudinaryImage_FileFieldPolicy = {
  encoding?: FieldPolicy<any> | FieldReadFunction<any>;
  filename?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  mimetype?: FieldPolicy<any> | FieldReadFunction<any>;
  originalFilename?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrlTransformed?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminMetaKeySpecifier = (
  | "enableSessionItem"
  | "enableSignout"
  | "list"
  | "lists"
  | KeystoneAdminMetaKeySpecifier
)[];
export type KeystoneAdminMetaFieldPolicy = {
  enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>;
  enableSignout?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  lists?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaKeySpecifier = (
  | "createView"
  | "customViewsIndex"
  | "fieldMeta"
  | "isFilterable"
  | "isOrderable"
  | "itemView"
  | "label"
  | "listView"
  | "path"
  | "search"
  | "viewsIndex"
  | KeystoneAdminUIFieldMetaKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
  createView?: FieldPolicy<any> | FieldReadFunction<any>;
  customViewsIndex?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  isFilterable?: FieldPolicy<any> | FieldReadFunction<any>;
  isOrderable?: FieldPolicy<any> | FieldReadFunction<any>;
  itemView?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  listView?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  search?: FieldPolicy<any> | FieldReadFunction<any>;
  viewsIndex?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaItemViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaListViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIListMetaKeySpecifier = (
  | "description"
  | "fields"
  | "hideCreate"
  | "hideDelete"
  | "initialColumns"
  | "initialSort"
  | "isHidden"
  | "itemQueryName"
  | "key"
  | "label"
  | "labelField"
  | "listQueryName"
  | "pageSize"
  | "path"
  | "plural"
  | "singular"
  | KeystoneAdminUIListMetaKeySpecifier
)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  hideCreate?: FieldPolicy<any> | FieldReadFunction<any>;
  hideDelete?: FieldPolicy<any> | FieldReadFunction<any>;
  initialColumns?: FieldPolicy<any> | FieldReadFunction<any>;
  initialSort?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelField?: FieldPolicy<any> | FieldReadFunction<any>;
  listQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  pageSize?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUISortKeySpecifier = ("direction" | "field" | KeystoneAdminUISortKeySpecifier)[];
export type KeystoneAdminUISortFieldPolicy = {
  direction?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneMetaKeySpecifier = ("adminMeta" | KeystoneMetaKeySpecifier)[];
export type KeystoneMetaFieldPolicy = {
  adminMeta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | "addToCart"
  | "authenticateUserWithPassword"
  | "checkout"
  | "createCartItem"
  | "createCartItems"
  | "createInitialUser"
  | "createOrder"
  | "createOrderItem"
  | "createOrderItems"
  | "createOrders"
  | "createProduct"
  | "createProductImage"
  | "createProductImages"
  | "createProducts"
  | "createUser"
  | "createUsers"
  | "deleteCartItem"
  | "deleteCartItems"
  | "deleteOrder"
  | "deleteOrderItem"
  | "deleteOrderItems"
  | "deleteOrders"
  | "deleteProduct"
  | "deleteProductImage"
  | "deleteProductImages"
  | "deleteProducts"
  | "deleteUser"
  | "deleteUsers"
  | "endSession"
  | "redeemUserPasswordResetToken"
  | "sendUserPasswordResetLink"
  | "updateCartItem"
  | "updateCartItems"
  | "updateOrder"
  | "updateOrderItem"
  | "updateOrderItems"
  | "updateOrders"
  | "updateProduct"
  | "updateProductImage"
  | "updateProductImages"
  | "updateProducts"
  | "updateUser"
  | "updateUsers"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  addToCart?: FieldPolicy<any> | FieldReadFunction<any>;
  authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>;
  checkout?: FieldPolicy<any> | FieldReadFunction<any>;
  createCartItem?: FieldPolicy<any> | FieldReadFunction<any>;
  createCartItems?: FieldPolicy<any> | FieldReadFunction<any>;
  createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createOrder?: FieldPolicy<any> | FieldReadFunction<any>;
  createOrderItem?: FieldPolicy<any> | FieldReadFunction<any>;
  createOrderItems?: FieldPolicy<any> | FieldReadFunction<any>;
  createOrders?: FieldPolicy<any> | FieldReadFunction<any>;
  createProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  createProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  createProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  createProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteCartItem?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteCartItems?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteOrder?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteOrderItem?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteOrderItems?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteOrders?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  endSession?: FieldPolicy<any> | FieldReadFunction<any>;
  redeemUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>;
  sendUserPasswordResetLink?: FieldPolicy<any> | FieldReadFunction<any>;
  updateCartItem?: FieldPolicy<any> | FieldReadFunction<any>;
  updateCartItems?: FieldPolicy<any> | FieldReadFunction<any>;
  updateOrder?: FieldPolicy<any> | FieldReadFunction<any>;
  updateOrderItem?: FieldPolicy<any> | FieldReadFunction<any>;
  updateOrderItems?: FieldPolicy<any> | FieldReadFunction<any>;
  updateOrders?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUsers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type OrderKeySpecifier = (
  | "charge"
  | "id"
  | "items"
  | "itemsCount"
  | "label"
  | "total"
  | "user"
  | OrderKeySpecifier
)[];
export type OrderFieldPolicy = {
  charge?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  items?: FieldPolicy<any> | FieldReadFunction<any>;
  itemsCount?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type OrderItemKeySpecifier = (
  | "description"
  | "id"
  | "name"
  | "order"
  | "photo"
  | "price"
  | "quantity"
  | OrderItemKeySpecifier
)[];
export type OrderItemFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  order?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
  price?: FieldPolicy<any> | FieldReadFunction<any>;
  quantity?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PasswordStateKeySpecifier = ("isSet" | PasswordStateKeySpecifier)[];
export type PasswordStateFieldPolicy = {
  isSet?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProductKeySpecifier = (
  | "description"
  | "id"
  | "name"
  | "photo"
  | "price"
  | "status"
  | ProductKeySpecifier
)[];
export type ProductFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
  price?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProductImageKeySpecifier = ("altText" | "id" | "image" | "product" | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
  altText?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  product?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "authenticatedItem"
  | "cartItem"
  | "cartItems"
  | "cartItemsCount"
  | "keystone"
  | "order"
  | "orderItem"
  | "orderItems"
  | "orderItemsCount"
  | "orders"
  | "ordersCount"
  | "product"
  | "productImage"
  | "productImages"
  | "productImagesCount"
  | "products"
  | "productsCount"
  | "user"
  | "users"
  | "usersCount"
  | "validateUserPasswordResetToken"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>;
  cartItem?: FieldPolicy<any> | FieldReadFunction<any>;
  cartItems?: FieldPolicy<any> | FieldReadFunction<any>;
  cartItemsCount?: FieldPolicy<any> | FieldReadFunction<any>;
  keystone?: FieldPolicy<any> | FieldReadFunction<any>;
  order?: FieldPolicy<any> | FieldReadFunction<any>;
  orderItem?: FieldPolicy<any> | FieldReadFunction<any>;
  orderItems?: FieldPolicy<any> | FieldReadFunction<any>;
  orderItemsCount?: FieldPolicy<any> | FieldReadFunction<any>;
  orders?: FieldPolicy<any> | FieldReadFunction<any>;
  ordersCount?: FieldPolicy<any> | FieldReadFunction<any>;
  product?: FieldPolicy<any> | FieldReadFunction<any>;
  productImage?: FieldPolicy<any> | FieldReadFunction<any>;
  productImages?: FieldPolicy<any> | FieldReadFunction<any>;
  productImagesCount?: FieldPolicy<any> | FieldReadFunction<any>;
  products?: FieldPolicy<any> | FieldReadFunction<any>;
  productsCount?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  users?: FieldPolicy<any> | FieldReadFunction<any>;
  usersCount?: FieldPolicy<any> | FieldReadFunction<any>;
  validateUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RedeemUserPasswordResetTokenResultKeySpecifier = (
  | "code"
  | "message"
  | RedeemUserPasswordResetTokenResultKeySpecifier
)[];
export type RedeemUserPasswordResetTokenResultFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "cart"
  | "cartCount"
  | "email"
  | "id"
  | "name"
  | "orders"
  | "ordersCount"
  | "password"
  | "passwordResetIssuedAt"
  | "passwordResetRedeemedAt"
  | "passwordResetToken"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  cart?: FieldPolicy<any> | FieldReadFunction<any>;
  cartCount?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  orders?: FieldPolicy<any> | FieldReadFunction<any>;
  ordersCount?: FieldPolicy<any> | FieldReadFunction<any>;
  password?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = (
  | "message"
  | UserAuthenticationWithPasswordFailureKeySpecifier
)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = (
  | "item"
  | "sessionToken"
  | UserAuthenticationWithPasswordSuccessKeySpecifier
)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  sessionToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ValidateUserPasswordResetTokenResultKeySpecifier = (
  | "code"
  | "message"
  | ValidateUserPasswordResetTokenResultKeySpecifier
)[];
export type ValidateUserPasswordResetTokenResultFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  CartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier);
    fields?: CartItemFieldPolicy;
  };
  CloudinaryImage_File?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | CloudinaryImage_FileKeySpecifier | (() => undefined | CloudinaryImage_FileKeySpecifier);
    fields?: CloudinaryImage_FileFieldPolicy;
  };
  KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminMetaKeySpecifier | (() => undefined | KeystoneAdminMetaKeySpecifier);
    fields?: KeystoneAdminMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUIFieldMetaKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMetaCreateView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaItemView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaItemViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaListView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaListViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy;
  };
  KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUIListMetaKeySpecifier | (() => undefined | KeystoneAdminUIListMetaKeySpecifier);
    fields?: KeystoneAdminUIListMetaFieldPolicy;
  };
  KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUISortKeySpecifier | (() => undefined | KeystoneAdminUISortKeySpecifier);
    fields?: KeystoneAdminUISortFieldPolicy;
  };
  KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneMetaKeySpecifier | (() => undefined | KeystoneMetaKeySpecifier);
    fields?: KeystoneMetaFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier);
    fields?: OrderFieldPolicy;
  };
  OrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | OrderItemKeySpecifier | (() => undefined | OrderItemKeySpecifier);
    fields?: OrderItemFieldPolicy;
  };
  PasswordState?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | PasswordStateKeySpecifier | (() => undefined | PasswordStateKeySpecifier);
    fields?: PasswordStateFieldPolicy;
  };
  Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier);
    fields?: ProductFieldPolicy;
  };
  ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier);
    fields?: ProductImageFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  RedeemUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RedeemUserPasswordResetTokenResultKeySpecifier
      | (() => undefined | RedeemUserPasswordResetTokenResultKeySpecifier);
    fields?: RedeemUserPasswordResetTokenResultFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
  UserAuthenticationWithPasswordFailure?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordFailureKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier);
    fields?: UserAuthenticationWithPasswordFailureFieldPolicy;
  };
  UserAuthenticationWithPasswordSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordSuccessKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier);
    fields?: UserAuthenticationWithPasswordSuccessFieldPolicy;
  };
  ValidateUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ValidateUserPasswordResetTokenResultKeySpecifier
      | (() => undefined | ValidateUserPasswordResetTokenResultKeySpecifier);
    fields?: ValidateUserPasswordResetTokenResultFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
