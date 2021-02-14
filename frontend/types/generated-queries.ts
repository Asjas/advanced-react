import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CartItemRelateToManyInput = {
  create?: Maybe<Array<Maybe<CartItemCreateInput>>>;
  connect?: Maybe<Array<Maybe<CartItemWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<CartItemWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type OrderRelateToManyInput = {
  create?: Maybe<Array<Maybe<OrderCreateInput>>>;
  connect?: Maybe<Array<Maybe<OrderWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<OrderWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  cart: Array<CartItem>;
  _cartMeta?: Maybe<_QueryMeta>;
  orders: Array<Order>;
  _ordersMeta?: Maybe<_QueryMeta>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type UserCartArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type User_CartMetaArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type UserOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type User_OrdersMetaArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  cart_every?: Maybe<CartItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  cart_some?: Maybe<CartItemWhereInput>;
  /**  condition must be false for all nodes  */
  cart_none?: Maybe<CartItemWhereInput>;
  /**  condition must be true for all nodes  */
  orders_every?: Maybe<OrderWhereInput>;
  /**  condition must be true for at least 1 node  */
  orders_some?: Maybe<OrderWhereInput>;
  /**  condition must be false for all nodes  */
  orders_none?: Maybe<OrderWhereInput>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_not?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_not?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_not?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_lt?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_lte?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_gt?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_gte?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_not?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_lt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_lte?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_gt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_gte?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  CartAsc = 'cart_ASC',
  CartDesc = 'cart_DESC',
  OrdersAsc = 'orders_ASC',
  OrdersDesc = 'orders_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC',
  MagicAuthIssuedAtAsc = 'magicAuthIssuedAt_ASC',
  MagicAuthIssuedAtDesc = 'magicAuthIssuedAt_DESC',
  MagicAuthRedeemedAtAsc = 'magicAuthRedeemedAt_ASC',
  MagicAuthRedeemedAtDesc = 'magicAuthRedeemedAt_DESC'
}

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  cart?: Maybe<CartItemRelateToManyInput>;
  orders?: Maybe<OrderRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  cart?: Maybe<CartItemRelateToManyInput>;
  orders?: Maybe<OrderRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type ProductImageRelateToOneInput = {
  create?: Maybe<ProductImageCreateInput>;
  connect?: Maybe<ProductImageWhereUniqueInput>;
  disconnect?: Maybe<ProductImageWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<ProductImage>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<Maybe<ProductWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  photo?: Maybe<ProductImageWhereInput>;
  photo_is_null?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  status_i?: Maybe<Scalars['String']>;
  status_not_i?: Maybe<Scalars['String']>;
  status_contains_i?: Maybe<Scalars['String']>;
  status_not_contains_i?: Maybe<Scalars['String']>;
  status_starts_with_i?: Maybe<Scalars['String']>;
  status_not_starts_with_i?: Maybe<Scalars['String']>;
  status_ends_with_i?: Maybe<Scalars['String']>;
  status_not_ends_with_i?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  price?: Maybe<Scalars['Int']>;
  price_not?: Maybe<Scalars['Int']>;
  price_lt?: Maybe<Scalars['Int']>;
  price_lte?: Maybe<Scalars['Int']>;
  price_gt?: Maybe<Scalars['Int']>;
  price_gte?: Maybe<Scalars['Int']>;
  price_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ProductWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortProductsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PhotoAsc = 'photo_ASC',
  PhotoDesc = 'photo_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC'
}

export type ProductUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};

export type ProductCreateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductsCreateInput = {
  data?: Maybe<ProductCreateInput>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  gravity?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  fetch_format?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  angle?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  underlay?: Maybe<Scalars['String']>;
  default_image?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  color_space?: Maybe<Scalars['String']>;
  dpr?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  density?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  transformation?: Maybe<Scalars['String']>;
};

export type ProductRelateToOneInput = {
  create?: Maybe<ProductCreateInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<ProductWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type ProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  altText?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
};

export type ProductImageWhereInput = {
  AND?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText?: Maybe<Scalars['String']>;
  altText_not?: Maybe<Scalars['String']>;
  altText_contains?: Maybe<Scalars['String']>;
  altText_not_contains?: Maybe<Scalars['String']>;
  altText_starts_with?: Maybe<Scalars['String']>;
  altText_not_starts_with?: Maybe<Scalars['String']>;
  altText_ends_with?: Maybe<Scalars['String']>;
  altText_not_ends_with?: Maybe<Scalars['String']>;
  altText_i?: Maybe<Scalars['String']>;
  altText_not_i?: Maybe<Scalars['String']>;
  altText_contains_i?: Maybe<Scalars['String']>;
  altText_not_contains_i?: Maybe<Scalars['String']>;
  altText_starts_with_i?: Maybe<Scalars['String']>;
  altText_not_starts_with_i?: Maybe<Scalars['String']>;
  altText_ends_with_i?: Maybe<Scalars['String']>;
  altText_not_ends_with_i?: Maybe<Scalars['String']>;
  altText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  product?: Maybe<ProductWhereInput>;
  product_is_null?: Maybe<Scalars['Boolean']>;
};

export type ProductImageWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortProductImagesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  ProductAsc = 'product_ASC',
  ProductDesc = 'product_DESC'
}

export type ProductImageUpdateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
  product?: Maybe<ProductRelateToOneInput>;
};

export type ProductImagesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductImageUpdateInput>;
};

export type ProductImageCreateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
  product?: Maybe<ProductRelateToOneInput>;
};

export type ProductImagesCreateInput = {
  data?: Maybe<ProductImageCreateInput>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  quantity?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  user?: Maybe<User>;
};

export type CartItemWhereInput = {
  AND?: Maybe<Array<Maybe<CartItemWhereInput>>>;
  OR?: Maybe<Array<Maybe<CartItemWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  quantity_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  product?: Maybe<ProductWhereInput>;
  product_is_null?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
};

export type CartItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortCartItemsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  ProductAsc = 'product_ASC',
  ProductDesc = 'product_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type CartItemUpdateInput = {
  quantity?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type CartItemsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<CartItemUpdateInput>;
};

export type CartItemCreateInput = {
  quantity?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type CartItemsCreateInput = {
  data?: Maybe<CartItemCreateInput>;
};

export type OrderRelateToOneInput = {
  create?: Maybe<OrderCreateInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
  disconnect?: Maybe<OrderWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<ProductImage>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
};

export type OrderItemWhereInput = {
  AND?: Maybe<Array<Maybe<OrderItemWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrderItemWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  photo?: Maybe<ProductImageWhereInput>;
  photo_is_null?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  price_not?: Maybe<Scalars['Int']>;
  price_lt?: Maybe<Scalars['Int']>;
  price_lte?: Maybe<Scalars['Int']>;
  price_gt?: Maybe<Scalars['Int']>;
  price_gte?: Maybe<Scalars['Int']>;
  price_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  quantity_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order?: Maybe<OrderWhereInput>;
  order_is_null?: Maybe<Scalars['Boolean']>;
};

export type OrderItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortOrderItemsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PhotoAsc = 'photo_ASC',
  PhotoDesc = 'photo_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC'
}

export type OrderItemUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderRelateToOneInput>;
};

export type OrderItemsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrderItemUpdateInput>;
};

export type OrderItemCreateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderRelateToOneInput>;
};

export type OrderItemsCreateInput = {
  data?: Maybe<OrderItemCreateInput>;
};

export type OrderItemRelateToManyInput = {
  create?: Maybe<Array<Maybe<OrderItemCreateInput>>>;
  connect?: Maybe<Array<Maybe<OrderItemWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<OrderItemWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  items: Array<OrderItem>;
  _itemsMeta?: Maybe<_QueryMeta>;
  user?: Maybe<User>;
  charge?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type OrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Order_ItemsMetaArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type OrderWhereInput = {
  AND?: Maybe<Array<Maybe<OrderWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrderWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  total?: Maybe<Scalars['Int']>;
  total_not?: Maybe<Scalars['Int']>;
  total_lt?: Maybe<Scalars['Int']>;
  total_lte?: Maybe<Scalars['Int']>;
  total_gt?: Maybe<Scalars['Int']>;
  total_gte?: Maybe<Scalars['Int']>;
  total_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  total_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**  condition must be true for all nodes  */
  items_every?: Maybe<OrderItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  items_some?: Maybe<OrderItemWhereInput>;
  /**  condition must be false for all nodes  */
  items_none?: Maybe<OrderItemWhereInput>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  charge?: Maybe<Scalars['String']>;
  charge_not?: Maybe<Scalars['String']>;
  charge_contains?: Maybe<Scalars['String']>;
  charge_not_contains?: Maybe<Scalars['String']>;
  charge_starts_with?: Maybe<Scalars['String']>;
  charge_not_starts_with?: Maybe<Scalars['String']>;
  charge_ends_with?: Maybe<Scalars['String']>;
  charge_not_ends_with?: Maybe<Scalars['String']>;
  charge_i?: Maybe<Scalars['String']>;
  charge_not_i?: Maybe<Scalars['String']>;
  charge_contains_i?: Maybe<Scalars['String']>;
  charge_not_contains_i?: Maybe<Scalars['String']>;
  charge_starts_with_i?: Maybe<Scalars['String']>;
  charge_not_starts_with_i?: Maybe<Scalars['String']>;
  charge_ends_with_i?: Maybe<Scalars['String']>;
  charge_not_ends_with_i?: Maybe<Scalars['String']>;
  charge_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  charge_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrderWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortOrdersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  ItemsAsc = 'items_ASC',
  ItemsDesc = 'items_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC',
  ChargeAsc = 'charge_ASC',
  ChargeDesc = 'charge_DESC'
}

export type OrderUpdateInput = {
  total?: Maybe<Scalars['Int']>;
  items?: Maybe<OrderItemRelateToManyInput>;
  user?: Maybe<UserRelateToOneInput>;
  charge?: Maybe<Scalars['String']>;
};

export type OrdersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrderUpdateInput>;
};

export type OrderCreateInput = {
  total?: Maybe<Scalars['Int']>;
  items?: Maybe<OrderItemRelateToManyInput>;
  user?: Maybe<UserRelateToOneInput>;
  charge?: Maybe<Scalars['String']>;
};

export type OrdersCreateInput = {
  data?: Maybe<OrderCreateInput>;
};


export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
};


export type _ListSchemaFieldsArgs = {
  where?: Maybe<_ListSchemaFieldsInput>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  key?: Maybe<Scalars['String']>;
  /** Whether this is an auxiliary helper list */
  auxiliary?: Maybe<Scalars['Boolean']>;
};

export type _ListSchemaFieldsInput = {
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**  Perform a meta-query on all Product items which match the where clause.  */
  _allProductsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Product list.  */
  _ProductsMeta?: Maybe<_ListMeta>;
  /**  Search for all ProductImage items which match the where clause.  */
  allProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Search for the ProductImage item with the matching ID.  */
  ProductImage?: Maybe<ProductImage>;
  /**  Perform a meta-query on all ProductImage items which match the where clause.  */
  _allProductImagesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the ProductImage list.  */
  _ProductImagesMeta?: Maybe<_ListMeta>;
  /**  Search for all CartItem items which match the where clause.  */
  allCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Search for the CartItem item with the matching ID.  */
  CartItem?: Maybe<CartItem>;
  /**  Perform a meta-query on all CartItem items which match the where clause.  */
  _allCartItemsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the CartItem list.  */
  _CartItemsMeta?: Maybe<_ListMeta>;
  /**  Search for all OrderItem items which match the where clause.  */
  allOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Search for the OrderItem item with the matching ID.  */
  OrderItem?: Maybe<OrderItem>;
  /**  Perform a meta-query on all OrderItem items which match the where clause.  */
  _allOrderItemsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the OrderItem list.  */
  _OrderItemsMeta?: Maybe<_ListMeta>;
  /**  Search for all Order items which match the where clause.  */
  allOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Search for the Order item with the matching ID.  */
  Order?: Maybe<Order>;
  /**  Perform a meta-query on all Order items which match the where clause.  */
  _allOrdersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Order list.  */
  _OrdersMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  keystone: KeystoneMeta;
};


export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type Query_AllProductsMetaArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllProductImagesArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};


export type Query_AllProductImagesMetaArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllCartItemsArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type Query_AllCartItemsMetaArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type Query_AllOrderItemsMetaArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type Query_AllOrdersMetaArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type Query_KsListsMetaArgs = {
  where?: Maybe<_KsListsMetaInput>;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single ProductImage item.  */
  createProductImage?: Maybe<ProductImage>;
  /**  Create multiple ProductImage items.  */
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Update a single ProductImage item by ID.  */
  updateProductImage?: Maybe<ProductImage>;
  /**  Update multiple ProductImage items by ID.  */
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Delete a single ProductImage item by ID.  */
  deleteProductImage?: Maybe<ProductImage>;
  /**  Delete multiple ProductImage items by ID.  */
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Create a single CartItem item.  */
  createCartItem?: Maybe<CartItem>;
  /**  Create multiple CartItem items.  */
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Update a single CartItem item by ID.  */
  updateCartItem?: Maybe<CartItem>;
  /**  Update multiple CartItem items by ID.  */
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Delete a single CartItem item by ID.  */
  deleteCartItem?: Maybe<CartItem>;
  /**  Delete multiple CartItem items by ID.  */
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Create a single OrderItem item.  */
  createOrderItem?: Maybe<OrderItem>;
  /**  Create multiple OrderItem items.  */
  createOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Update a single OrderItem item by ID.  */
  updateOrderItem?: Maybe<OrderItem>;
  /**  Update multiple OrderItem items by ID.  */
  updateOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Delete a single OrderItem item by ID.  */
  deleteOrderItem?: Maybe<OrderItem>;
  /**  Delete multiple OrderItem items by ID.  */
  deleteOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Create a single Order item.  */
  createOrder?: Maybe<Order>;
  /**  Create multiple Order items.  */
  createOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Update a single Order item by ID.  */
  updateOrder?: Maybe<Order>;
  /**  Update multiple Order items by ID.  */
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Delete a single Order item by ID.  */
  deleteOrder?: Maybe<Order>;
  /**  Delete multiple Order items by ID.  */
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  addToCart?: Maybe<CartItem>;
  checkout?: Maybe<Order>;
  endSession: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateProductArgs = {
  data?: Maybe<ProductCreateInput>;
};


export type MutationCreateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsCreateInput>>>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};


export type MutationUpdateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsUpdateInput>>>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateProductImageArgs = {
  data?: Maybe<ProductImageCreateInput>;
};


export type MutationCreateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesCreateInput>>>;
};


export type MutationUpdateProductImageArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProductImageUpdateInput>;
};


export type MutationUpdateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesUpdateInput>>>;
};


export type MutationDeleteProductImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductImagesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateCartItemArgs = {
  data?: Maybe<CartItemCreateInput>;
};


export type MutationCreateCartItemsArgs = {
  data?: Maybe<Array<Maybe<CartItemsCreateInput>>>;
};


export type MutationUpdateCartItemArgs = {
  id: Scalars['ID'];
  data?: Maybe<CartItemUpdateInput>;
};


export type MutationUpdateCartItemsArgs = {
  data?: Maybe<Array<Maybe<CartItemsUpdateInput>>>;
};


export type MutationDeleteCartItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCartItemsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrderItemArgs = {
  data?: Maybe<OrderItemCreateInput>;
};


export type MutationCreateOrderItemsArgs = {
  data?: Maybe<Array<Maybe<OrderItemsCreateInput>>>;
};


export type MutationUpdateOrderItemArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrderItemUpdateInput>;
};


export type MutationUpdateOrderItemsArgs = {
  data?: Maybe<Array<Maybe<OrderItemsUpdateInput>>>;
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrderItemsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrderArgs = {
  data?: Maybe<OrderCreateInput>;
};


export type MutationCreateOrdersArgs = {
  data?: Maybe<Array<Maybe<OrdersCreateInput>>>;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrderUpdateInput>;
};


export type MutationUpdateOrdersArgs = {
  data?: Maybe<Array<Maybe<OrdersUpdateInput>>>;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrdersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAddToCartArgs = {
  productId?: Maybe<Scalars['ID']>;
};


export type MutationCheckoutArgs = {
  token: Scalars['String'];
};


export type AuthenticatedItem = User;

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH'
}

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export enum PasswordResetRequestErrorCode {
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES'
}

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  TokenNotSet = 'TOKEN_NOT_SET',
  TokenMismatch = 'TOKEN_MISMATCH',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsHash: Scalars['String'];
  customViewsHash?: Maybe<Scalars['String']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type AddToCartMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & { addToCart?: Maybe<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  )> }
);

export type AllOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllOrdersQuery = (
  { __typename?: 'Query' }
  & { allOrders?: Maybe<Array<Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'charge' | 'total'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>, items: Array<(
      { __typename?: 'OrderItem' }
      & Pick<OrderItem, 'id' | 'name' | 'description' | 'price' | 'quantity'>
      & { photo?: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )> }
  )>>> }
);

export type AllProductsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
}>;


export type AllProductsQuery = (
  { __typename?: 'Query' }
  & { allProducts?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'description' | 'price'>
    & { photo?: Maybe<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'id' | 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )>>> }
);

export type AllProductsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsCountQuery = (
  { __typename?: 'Query' }
  & { _allProductsMeta?: Maybe<(
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  )> }
);

export type CreateOrderMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { checkout?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'charge' | 'total'>
    & { items: Array<(
      { __typename?: 'OrderItem' }
      & Pick<OrderItem, 'id' | 'name'>
    )> }
  )> }
);

export type CreateProductMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  image?: Maybe<Scalars['Upload']>;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name'>
  )> }
);

export type DeleteCartItemMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCartItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteCartItem?: Maybe<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  )> }
);

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteProduct?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
  )> }
);

export type GetOrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderQuery = (
  { __typename?: 'Query' }
  & { order?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'charge' | 'total'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>, items: Array<(
      { __typename?: 'OrderItem' }
      & Pick<OrderItem, 'id' | 'name' | 'description' | 'price' | 'quantity'>
      & { photo?: Maybe<(
        { __typename?: 'ProductImage' }
        & Pick<ProductImage, 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )> }
  )> }
);

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { Product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'description' | 'price'>
    & { photo?: Maybe<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )> }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
    & { cart: Array<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'id' | 'quantity'>
      & { product?: Maybe<(
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'name' | 'description' | 'price'>
        & { photo?: Maybe<(
          { __typename?: 'ProductImage' }
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )> }
      )> }
    )> }
  )> }
);

export type RequestResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetMutation = (
  { __typename?: 'Mutation' }
  & { sendUserPasswordResetLink?: Maybe<(
    { __typename?: 'SendUserPasswordResetLinkResult' }
    & Pick<SendUserPasswordResetLinkResult, 'code' | 'message'>
  )> }
);

export type RedeemPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type RedeemPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & { redeemUserPasswordResetToken?: Maybe<(
    { __typename?: 'RedeemUserPasswordResetTokenResult' }
    & Pick<RedeemUserPasswordResetTokenResult, 'code' | 'message'>
  )> }
);

export type SearchProductsQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type SearchProductsQuery = (
  { __typename?: 'Query' }
  & { searchTerms?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name'>
    & { photo?: Maybe<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )>>> }
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { authenticateUserWithPassword: (
    { __typename?: 'UserAuthenticationWithPasswordSuccess' }
    & { item: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name'>
    ) }
  ) | (
    { __typename?: 'UserAuthenticationWithPasswordFailure' }
    & Pick<UserAuthenticationWithPasswordFailure, 'code' | 'message'>
  ) }
);

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'endSession'>
);

export type SignUpMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name'>
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'description' | 'price'>
  )> }
);


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
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, baseOptions);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const AllOrdersDocument = gql`
    query allOrders {
  allOrders {
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
        return Apollo.useQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, baseOptions);
      }
export function useAllOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
          return Apollo.useLazyQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, baseOptions);
        }
export type AllOrdersQueryHookResult = ReturnType<typeof useAllOrdersQuery>;
export type AllOrdersLazyQueryHookResult = ReturnType<typeof useAllOrdersLazyQuery>;
export type AllOrdersQueryResult = Apollo.QueryResult<AllOrdersQuery, AllOrdersQueryVariables>;
export function refetchAllOrdersQuery(variables?: AllOrdersQueryVariables) {
      return { query: AllOrdersDocument, variables: variables }
    }
export const AllProductsDocument = gql`
    query allProducts($skip: Int = 0, $first: Int) {
  allProducts(skip: $skip, first: $first) {
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
export function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
        return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, baseOptions);
      }
export function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
          return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, baseOptions);
        }
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export function refetchAllProductsQuery(variables?: AllProductsQueryVariables) {
      return { query: AllProductsDocument, variables: variables }
    }
export const AllProductsCountDocument = gql`
    query allProductsCount {
  _allProductsMeta {
    count
  }
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
export function useAllProductsCountQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsCountQuery, AllProductsCountQueryVariables>) {
        return Apollo.useQuery<AllProductsCountQuery, AllProductsCountQueryVariables>(AllProductsCountDocument, baseOptions);
      }
export function useAllProductsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsCountQuery, AllProductsCountQueryVariables>) {
          return Apollo.useLazyQuery<AllProductsCountQuery, AllProductsCountQueryVariables>(AllProductsCountDocument, baseOptions);
        }
export type AllProductsCountQueryHookResult = ReturnType<typeof useAllProductsCountQuery>;
export type AllProductsCountLazyQueryHookResult = ReturnType<typeof useAllProductsCountLazyQuery>;
export type AllProductsCountQueryResult = Apollo.QueryResult<AllProductsCountQuery, AllProductsCountQueryVariables>;
export function refetchAllProductsCountQuery(variables?: AllProductsCountQueryVariables) {
      return { query: AllProductsCountDocument, variables: variables }
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
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($name: String!, $description: String!, $price: Int!, $image: Upload) {
  createProduct(
    data: {name: $name, description: $description, price: $price, status: "AVAILABLE", photo: {create: {image: $image, altText: $name}}}
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
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteCartItemDocument = gql`
    mutation deleteCartItem($id: ID!) {
  deleteCartItem(id: $id) {
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
export function useDeleteCartItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>) {
        return Apollo.useMutation<DeleteCartItemMutation, DeleteCartItemMutationVariables>(DeleteCartItemDocument, baseOptions);
      }
export type DeleteCartItemMutationHookResult = ReturnType<typeof useDeleteCartItemMutation>;
export type DeleteCartItemMutationResult = Apollo.MutationResult<DeleteCartItemMutation>;
export type DeleteCartItemMutationOptions = Apollo.BaseMutationOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: ID!) {
  deleteProduct(id: $id) {
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
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const GetOrderDocument = gql`
    query getOrder($id: ID!) {
  order: Order(where: {id: $id}) {
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
        return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, baseOptions);
      }
export function useGetOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
          return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, baseOptions);
        }
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<typeof useGetOrderLazyQuery>;
export type GetOrderQueryResult = Apollo.QueryResult<GetOrderQuery, GetOrderQueryVariables>;
export function refetchGetOrderQuery(variables?: GetOrderQueryVariables) {
      return { query: GetOrderDocument, variables: variables }
    }
export const ProductDocument = gql`
    query Product($id: ID!) {
  Product(where: {id: $id}) {
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
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export function refetchProductQuery(variables?: ProductQueryVariables) {
      return { query: ProductDocument, variables: variables }
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
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
      return { query: UserDocument, variables: variables }
    }
export const RequestResetDocument = gql`
    mutation requestReset($email: String!) {
  sendUserPasswordResetLink(email: $email) {
    code
    message
  }
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
export function useRequestResetMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetMutation, RequestResetMutationVariables>) {
        return Apollo.useMutation<RequestResetMutation, RequestResetMutationVariables>(RequestResetDocument, baseOptions);
      }
export type RequestResetMutationHookResult = ReturnType<typeof useRequestResetMutation>;
export type RequestResetMutationResult = Apollo.MutationResult<RequestResetMutation>;
export type RequestResetMutationOptions = Apollo.BaseMutationOptions<RequestResetMutation, RequestResetMutationVariables>;
export const RedeemPasswordResetDocument = gql`
    mutation redeemPasswordReset($email: String!, $password: String!, $token: String!) {
  redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {
    code
    message
  }
}
    `;
export type RedeemPasswordResetMutationFn = Apollo.MutationFunction<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>;

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
export function useRedeemPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>) {
        return Apollo.useMutation<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>(RedeemPasswordResetDocument, baseOptions);
      }
export type RedeemPasswordResetMutationHookResult = ReturnType<typeof useRedeemPasswordResetMutation>;
export type RedeemPasswordResetMutationResult = Apollo.MutationResult<RedeemPasswordResetMutation>;
export type RedeemPasswordResetMutationOptions = Apollo.BaseMutationOptions<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>;
export const SearchProductsDocument = gql`
    query searchProducts($searchTerm: String!) {
  searchTerms: allProducts(
    where: {OR: [{name_contains_i: $searchTerm}, {description_contains_i: $searchTerm}]}
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
export function useSearchProductsQuery(baseOptions: Apollo.QueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
        return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, baseOptions);
      }
export function useSearchProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
          return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, baseOptions);
        }
export type SearchProductsQueryHookResult = ReturnType<typeof useSearchProductsQuery>;
export type SearchProductsLazyQueryHookResult = ReturnType<typeof useSearchProductsLazyQuery>;
export type SearchProductsQueryResult = Apollo.QueryResult<SearchProductsQuery, SearchProductsQueryVariables>;
export function refetchSearchProductsQuery(variables?: SearchProductsQueryVariables) {
      return { query: SearchProductsDocument, variables: variables }
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
      code
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
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
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
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, baseOptions);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($name: String!, $email: String!, $password: String!) {
  createUser(data: {name: $name, email: $email, password: $password}) {
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
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($id: ID!, $name: String, $description: String, $price: Int) {
  updateProduct(
    id: $id
    data: {name: $name, description: $description, price: $price}
  ) {
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
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export type UserKeySpecifier = ('id' | 'name' | 'email' | 'password_is_set' | 'cart' | '_cartMeta' | 'orders' | '_ordersMeta' | 'passwordResetToken_is_set' | 'passwordResetIssuedAt' | 'passwordResetRedeemedAt' | 'magicAuthToken_is_set' | 'magicAuthIssuedAt' | 'magicAuthRedeemedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	password_is_set?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	_cartMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	_ordersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	magicAuthToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>,
	magicAuthIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	magicAuthRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('id' | 'name' | 'description' | 'photo' | 'status' | 'price' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CloudinaryImage_FileKeySpecifier = ('id' | 'path' | 'filename' | 'originalFilename' | 'mimetype' | 'encoding' | 'publicUrl' | 'publicUrlTransformed' | CloudinaryImage_FileKeySpecifier)[];
export type CloudinaryImage_FileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	originalFilename?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	publicUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	publicUrlTransformed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageKeySpecifier = ('id' | 'image' | 'altText' | 'product' | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	altText?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemKeySpecifier = ('id' | 'quantity' | 'product' | 'user' | CartItemKeySpecifier)[];
export type CartItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderItemKeySpecifier = ('id' | 'name' | 'description' | 'photo' | 'price' | 'quantity' | 'order' | OrderItemKeySpecifier)[];
export type OrderItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('id' | 'label' | 'total' | 'items' | '_itemsMeta' | 'user' | 'charge' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	_itemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	charge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListAccessKeySpecifier = ('create' | 'read' | 'update' | 'delete' | 'auth' | _ListAccessKeySpecifier)[];
export type _ListAccessFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	read?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	auth?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListQueriesKeySpecifier = ('item' | 'list' | 'meta' | _ListQueriesKeySpecifier)[];
export type _ListQueriesFieldPolicy = {
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	list?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListMutationsKeySpecifier = ('create' | 'createMany' | 'update' | 'updateMany' | 'delete' | 'deleteMany' | _ListMutationsKeySpecifier)[];
export type _ListMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	createMany?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMany?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMany?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListInputTypesKeySpecifier = ('whereInput' | 'whereUniqueInput' | 'createInput' | 'createManyInput' | 'updateInput' | 'updateManyInput' | _ListInputTypesKeySpecifier)[];
export type _ListInputTypesFieldPolicy = {
	whereInput?: FieldPolicy<any> | FieldReadFunction<any>,
	whereUniqueInput?: FieldPolicy<any> | FieldReadFunction<any>,
	createInput?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyInput?: FieldPolicy<any> | FieldReadFunction<any>,
	updateInput?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyInput?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListSchemaFieldsKeySpecifier = ('path' | 'name' | 'type' | _ListSchemaFieldsKeySpecifier)[];
export type _ListSchemaFieldsFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListSchemaRelatedFieldsKeySpecifier = ('type' | 'fields' | _ListSchemaRelatedFieldsKeySpecifier)[];
export type _ListSchemaRelatedFieldsFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListSchemaKeySpecifier = ('type' | 'queries' | 'mutations' | 'inputTypes' | 'fields' | 'relatedFields' | _ListSchemaKeySpecifier)[];
export type _ListSchemaFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	queries?: FieldPolicy<any> | FieldReadFunction<any>,
	mutations?: FieldPolicy<any> | FieldReadFunction<any>,
	inputTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedFields?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListMetaKeySpecifier = ('key' | 'name' | 'description' | 'label' | 'singular' | 'plural' | 'path' | 'access' | 'schema' | _ListMetaKeySpecifier)[];
export type _ListMetaFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	singular?: FieldPolicy<any> | FieldReadFunction<any>,
	plural?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	access?: FieldPolicy<any> | FieldReadFunction<any>,
	schema?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _QueryMetaKeySpecifier = ('count' | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('allUsers' | 'User' | '_allUsersMeta' | '_UsersMeta' | 'allProducts' | 'Product' | '_allProductsMeta' | '_ProductsMeta' | 'allProductImages' | 'ProductImage' | '_allProductImagesMeta' | '_ProductImagesMeta' | 'allCartItems' | 'CartItem' | '_allCartItemsMeta' | '_CartItemsMeta' | 'allOrderItems' | 'OrderItem' | '_allOrderItemsMeta' | '_OrderItemsMeta' | 'allOrders' | 'Order' | '_allOrdersMeta' | '_OrdersMeta' | '_ksListsMeta' | 'appVersion' | 'authenticatedItem' | 'validateUserPasswordResetToken' | 'keystone' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	allUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	_allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_UsersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	Product?: FieldPolicy<any> | FieldReadFunction<any>,
	_allProductsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_ProductsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	ProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	_allProductImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_ProductImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	CartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	_allCartItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_CartItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	OrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	_allOrderItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_OrderItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	Order?: FieldPolicy<any> | FieldReadFunction<any>,
	_allOrdersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_OrdersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_ksListsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	appVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>,
	validateUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>,
	keystone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createUser' | 'createUsers' | 'updateUser' | 'updateUsers' | 'deleteUser' | 'deleteUsers' | 'createProduct' | 'createProducts' | 'updateProduct' | 'updateProducts' | 'deleteProduct' | 'deleteProducts' | 'createProductImage' | 'createProductImages' | 'updateProductImage' | 'updateProductImages' | 'deleteProductImage' | 'deleteProductImages' | 'createCartItem' | 'createCartItems' | 'updateCartItem' | 'updateCartItems' | 'deleteCartItem' | 'deleteCartItems' | 'createOrderItem' | 'createOrderItems' | 'updateOrderItem' | 'updateOrderItems' | 'deleteOrderItem' | 'deleteOrderItems' | 'createOrder' | 'createOrders' | 'updateOrder' | 'updateOrders' | 'deleteOrder' | 'deleteOrders' | 'authenticateUserWithPassword' | 'createInitialUser' | 'sendUserPasswordResetLink' | 'redeemUserPasswordResetToken' | 'addToCart' | 'checkout' | 'endSession' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	createProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	createProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	createCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	createCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>,
	sendUserPasswordResetLink?: FieldPolicy<any> | FieldReadFunction<any>,
	redeemUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>,
	addToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	endSession?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = ('sessionToken' | 'item' | UserAuthenticationWithPasswordSuccessKeySpecifier)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
	sessionToken?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = ('code' | 'message' | UserAuthenticationWithPasswordFailureKeySpecifier)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendUserPasswordResetLinkResultKeySpecifier = ('code' | 'message' | SendUserPasswordResetLinkResultKeySpecifier)[];
export type SendUserPasswordResetLinkResultFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidateUserPasswordResetTokenResultKeySpecifier = ('code' | 'message' | ValidateUserPasswordResetTokenResultKeySpecifier)[];
export type ValidateUserPasswordResetTokenResultFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RedeemUserPasswordResetTokenResultKeySpecifier = ('code' | 'message' | RedeemUserPasswordResetTokenResultKeySpecifier)[];
export type RedeemUserPasswordResetTokenResultFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneMetaKeySpecifier = ('adminMeta' | KeystoneMetaKeySpecifier)[];
export type KeystoneMetaFieldPolicy = {
	adminMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminMetaKeySpecifier = ('enableSignout' | 'enableSessionItem' | 'lists' | 'list' | KeystoneAdminMetaKeySpecifier)[];
export type KeystoneAdminMetaFieldPolicy = {
	enableSignout?: FieldPolicy<any> | FieldReadFunction<any>,
	enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>,
	lists?: FieldPolicy<any> | FieldReadFunction<any>,
	list?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIListMetaKeySpecifier = ('key' | 'itemQueryName' | 'listQueryName' | 'hideCreate' | 'hideDelete' | 'path' | 'label' | 'singular' | 'plural' | 'description' | 'initialColumns' | 'pageSize' | 'labelField' | 'fields' | 'initialSort' | 'isHidden' | KeystoneAdminUIListMetaKeySpecifier)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>,
	listQueryName?: FieldPolicy<any> | FieldReadFunction<any>,
	hideCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	hideDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	singular?: FieldPolicy<any> | FieldReadFunction<any>,
	plural?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	initialColumns?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	labelField?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	initialSort?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUISortKeySpecifier = ('field' | 'direction' | KeystoneAdminUISortKeySpecifier)[];
export type KeystoneAdminUISortFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	direction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaKeySpecifier = ('path' | 'label' | 'isOrderable' | 'fieldMeta' | 'viewsHash' | 'customViewsHash' | 'createView' | 'listView' | 'itemView' | KeystoneAdminUIFieldMetaKeySpecifier)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	isOrderable?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	viewsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	customViewsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	createView?: FieldPolicy<any> | FieldReadFunction<any>,
	listView?: FieldPolicy<any> | FieldReadFunction<any>,
	itemView?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaCreateViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaListViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaItemViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	CloudinaryImage_File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CloudinaryImage_FileKeySpecifier | (() => undefined | CloudinaryImage_FileKeySpecifier),
		fields?: CloudinaryImage_FileFieldPolicy,
	},
	ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier),
		fields?: ProductImageFieldPolicy,
	},
	CartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier),
		fields?: CartItemFieldPolicy,
	},
	OrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderItemKeySpecifier | (() => undefined | OrderItemKeySpecifier),
		fields?: OrderItemFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	_ListAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListAccessKeySpecifier | (() => undefined | _ListAccessKeySpecifier),
		fields?: _ListAccessFieldPolicy,
	},
	_ListQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListQueriesKeySpecifier | (() => undefined | _ListQueriesKeySpecifier),
		fields?: _ListQueriesFieldPolicy,
	},
	_ListMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListMutationsKeySpecifier | (() => undefined | _ListMutationsKeySpecifier),
		fields?: _ListMutationsFieldPolicy,
	},
	_ListInputTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListInputTypesKeySpecifier | (() => undefined | _ListInputTypesKeySpecifier),
		fields?: _ListInputTypesFieldPolicy,
	},
	_ListSchemaFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListSchemaFieldsKeySpecifier | (() => undefined | _ListSchemaFieldsKeySpecifier),
		fields?: _ListSchemaFieldsFieldPolicy,
	},
	_ListSchemaRelatedFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListSchemaRelatedFieldsKeySpecifier | (() => undefined | _ListSchemaRelatedFieldsKeySpecifier),
		fields?: _ListSchemaRelatedFieldsFieldPolicy,
	},
	_ListSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListSchemaKeySpecifier | (() => undefined | _ListSchemaKeySpecifier),
		fields?: _ListSchemaFieldPolicy,
	},
	_ListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListMetaKeySpecifier | (() => undefined | _ListMetaKeySpecifier),
		fields?: _ListMetaFieldPolicy,
	},
	_QueryMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _QueryMetaKeySpecifier | (() => undefined | _QueryMetaKeySpecifier),
		fields?: _QueryMetaFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	UserAuthenticationWithPasswordSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticationWithPasswordSuccessKeySpecifier | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier),
		fields?: UserAuthenticationWithPasswordSuccessFieldPolicy,
	},
	UserAuthenticationWithPasswordFailure?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticationWithPasswordFailureKeySpecifier | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier),
		fields?: UserAuthenticationWithPasswordFailureFieldPolicy,
	},
	SendUserPasswordResetLinkResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendUserPasswordResetLinkResultKeySpecifier | (() => undefined | SendUserPasswordResetLinkResultKeySpecifier),
		fields?: SendUserPasswordResetLinkResultFieldPolicy,
	},
	ValidateUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidateUserPasswordResetTokenResultKeySpecifier | (() => undefined | ValidateUserPasswordResetTokenResultKeySpecifier),
		fields?: ValidateUserPasswordResetTokenResultFieldPolicy,
	},
	RedeemUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RedeemUserPasswordResetTokenResultKeySpecifier | (() => undefined | RedeemUserPasswordResetTokenResultKeySpecifier),
		fields?: RedeemUserPasswordResetTokenResultFieldPolicy,
	},
	KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneMetaKeySpecifier | (() => undefined | KeystoneMetaKeySpecifier),
		fields?: KeystoneMetaFieldPolicy,
	},
	KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminMetaKeySpecifier | (() => undefined | KeystoneAdminMetaKeySpecifier),
		fields?: KeystoneAdminMetaFieldPolicy,
	},
	KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIListMetaKeySpecifier | (() => undefined | KeystoneAdminUIListMetaKeySpecifier),
		fields?: KeystoneAdminUIListMetaFieldPolicy,
	},
	KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUISortKeySpecifier | (() => undefined | KeystoneAdminUISortKeySpecifier),
		fields?: KeystoneAdminUISortFieldPolicy,
	},
	KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaFieldPolicy,
	},
	KeystoneAdminUIFieldMetaCreateView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaCreateViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy,
	},
	KeystoneAdminUIFieldMetaListView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaListViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy,
	},
	KeystoneAdminUIFieldMetaItemView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaItemViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy,
	}
};