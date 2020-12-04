import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  admins?: Maybe<Array<Admin>>;
  authors: Array<Author>;
  publishers: Array<Publisher>;
  myOrders: Array<Order>;
  books: Array<Book>;
  categories: Array<Category>;
  author: Author;
  hello: Scalars['String'];
  users?: Maybe<Array<User>>;
  myReviews: Array<Review>;
  bookReviews: Array<Review>;
};


export type QueryAuthorsArgs = {
  orderBy?: Maybe<OrderByInput>;
  where?: Maybe<AuthorsArgs>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryPublishersArgs = {
  where?: Maybe<PublisherWhereInput>;
  orderBy?: Maybe<OrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryBooksArgs = {
  orderBy?: Maybe<OrderByInput>;
  where?: Maybe<BookWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryCategoriesArgs = {
  orderBy: OrderByInput;
  where: CategoryWhereInput;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAuthorArgs = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryMyReviewsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryBookReviewsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where: WhereUniqueInput;
};

export type Admin = {
  __typename?: 'Admin';
  id: Scalars['ID'];
  email: Scalars['String'];
  username: Scalars['String'];
  name: Scalars['String'];
  avatar: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  isDisabled: Scalars['Boolean'];
  isSuper: Scalars['Boolean'];
  permissions: Array<Permissions>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export enum Permissions {
  ViewAdmin = 'VIEW_ADMIN',
  CreateAdmin = 'CREATE_ADMIN',
  UpdateAdmin = 'UPDATE_ADMIN',
  ViewUser = 'VIEW_USER',
  CreateUser = 'CREATE_USER',
  UpdateUser = 'UPDATE_USER',
  ViewBook = 'VIEW_BOOK',
  CreateBook = 'CREATE_BOOK',
  UpdateBook = 'UPDATE_BOOK',
  ViewPublisher = 'VIEW_PUBLISHER',
  CreatePublisher = 'CREATE_PUBLISHER',
  UpdatePublisher = 'UPDATE_PUBLISHER',
  ViewAuthor = 'VIEW_AUTHOR',
  CreateAuthor = 'CREATE_AUTHOR',
  UpdateAuthor = 'UPDATE_AUTHOR',
  ViewCategory = 'VIEW_CATEGORY',
  CreateCategory = 'CREATE_CATEGORY',
  UpdateCategory = 'UPDATE_CATEGORY',
  ViewOrder = 'VIEW_ORDER',
  UpdateOrder = 'UPDATE_ORDER'
}

export type OrderByInput = {
  field: Scalars['String'];
  direction: Direction;
};

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type AuthorsArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  slug: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  description: Scalars['String'];
  books: Array<Book>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  slug: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  description: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Float'];
  sale: Scalars['Float'];
  year: Scalars['Float'];
  author?: Maybe<Array<Author>>;
  publisher?: Maybe<Publisher>;
  category?: Maybe<Category>;
  reviews: Array<Review>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Publisher = {
  __typename?: 'Publisher';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  slug: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  description: Scalars['String'];
  books: Array<Book>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  slug: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  description: Scalars['String'];
  books: Array<Book>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  title: Scalars['String'];
  rating: Scalars['Float'];
  content: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  book: Book;
  user: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  avatar: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  orders: Array<Order>;
  cart: Array<CartItem>;
  reviews: Array<Review>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  status: OrderStatus;
  isDeleted: Scalars['Boolean'];
  address: Scalars['String'];
  phone: Scalars['String'];
  total: Scalars['Float'];
  items: Array<OrderItem>;
  user: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export enum OrderStatus {
  InProgress = 'IN_PROGRESS',
  OnDelivery = 'ON_DELIVERY',
  Completed = 'COMPLETED'
}

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  item: Book;
  quantity: Scalars['Float'];
  price: Scalars['Float'];
  order: Order;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  quantity: Scalars['Float'];
  item: Book;
  user: User;
};

export type PublisherWhereInput = {
  name: Scalars['String'];
};

export type BookWhereInput = {
  name: Scalars['String'];
};

export type CategoryWhereInput = {
  name?: Maybe<Scalars['String']>;
};

export type WhereUniqueInput = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin: Admin;
  loginAdmin?: Maybe<Admin>;
  createAuthor: Author;
  updateAuthor: Author;
  updateAdmin: Admin;
  updatePublisher: Publisher;
  createBook: Book;
  createCategory: Category;
  updateCategory: Category;
  updatePermissions: Admin;
  createPublisher: Publisher;
  updateBook: Book;
  createOrder: Order;
  login: User;
  cancelOrder: Order;
  createUser: User;
  createReview: Review;
  updateReview: Review;
  updateBookImage: Scalars['Boolean'];
  updateAuthorImageResolver: Scalars['Boolean'];
  UpdateCategoryImage: Scalars['Boolean'];
  UpdatePublisherImage: Scalars['Boolean'];
};


export type MutationCreateAdminArgs = {
  data: CreateAdminInput;
};


export type MutationLoginAdminArgs = {
  data: LoginAdminInput;
};


export type MutationCreateAuthorArgs = {
  image: Scalars['Upload'];
  data: CreateAuthorInput;
};


export type MutationUpdateAuthorArgs = {
  where: WhereUniqueInput;
  data: UpdateAuthorInput;
};


export type MutationUpdateAdminArgs = {
  where: WhereUniqueInput;
  data: UpdateAdminInput;
};


export type MutationUpdatePublisherArgs = {
  where: WhereUniqueInput;
  data: UpdatePublisherInput;
};


export type MutationCreateBookArgs = {
  image: Scalars['Upload'];
  data: CreateBookInput;
};


export type MutationCreateCategoryArgs = {
  image: Scalars['Upload'];
  data: CreateCategoryInput;
};


export type MutationUpdateCategoryArgs = {
  where: WhereUniqueInput;
  data: UpdateCategoryInput;
};


export type MutationUpdatePermissionsArgs = {
  where: WhereUniqueInput;
  data: UpdatePermissionsInput;
};


export type MutationCreatePublisherArgs = {
  image: Scalars['Upload'];
  data: CreatePublisherInput;
};


export type MutationUpdateBookArgs = {
  where: WhereUniqueInput;
  data: UpdateBookInput;
};


export type MutationCreateOrderArgs = {
  data: CreateOrderInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationCancelOrderArgs = {
  where: WhereUniqueInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationCreateReviewArgs = {
  data: CreateReviewInput;
};


export type MutationUpdateReviewArgs = {
  where: WhereUniqueInput;
  data: UpdateReviewInput;
};


export type MutationUpdateBookImageArgs = {
  where: WhereUniqueInput;
  image: Scalars['Upload'];
};


export type MutationUpdateAuthorImageResolverArgs = {
  where: WhereUniqueInput;
  image: Scalars['Upload'];
};


export type MutationUpdateCategoryImageArgs = {
  where: WhereUniqueInput;
  image: Scalars['Upload'];
};


export type MutationUpdatePublisherImageArgs = {
  where: WhereUniqueInput;
  image: Scalars['Upload'];
};

export type CreateAdminInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  permissions: Array<Permissions>;
};

export type LoginAdminInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type CreateAuthorInput = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateAuthorInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type UpdateAdminInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UpdatePublisherInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CreateBookInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Float'];
  sale?: Maybe<Scalars['Float']>;
  year: Scalars['Float'];
  authorIDs: Array<Scalars['String']>;
  publisherID: Scalars['String'];
  categoryID: Scalars['String'];
};

export type CreateCategoryInput = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateCategoryInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdatePermissionsInput = {
  permissions: Array<Permissions>;
};

export type CreatePublisherInput = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateBookInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Float']>;
  sale?: Maybe<Scalars['Float']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['Float']>;
  authorIDs?: Maybe<Array<Scalars['String']>>;
  publisherID?: Maybe<Scalars['String']>;
  categoryID?: Maybe<Scalars['String']>;
};

export type CreateOrderInput = {
  address: Scalars['String'];
  phone: Scalars['String'];
  orderItems: Array<OrderItemInput>;
};

export type OrderItemInput = {
  bookID: Scalars['String'];
  quantity: Scalars['Float'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
};

export type CreateReviewInput = {
  bookID: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  rating: Scalars['Float'];
};

export type UpdateReviewInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type AllAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAuthorsQuery = (
  { __typename?: 'Query' }
  & { authors: Array<(
    { __typename?: 'Author' }
    & Pick<Author, 'id' | 'name' | 'image'>
  )> }
);

export type AuthorQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type AuthorQuery = (
  { __typename?: 'Query' }
  & { author: (
    { __typename?: 'Author' }
    & Pick<Author, 'id' | 'name' | 'image'>
  ) }
);

export type AllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBooksQuery = (
  { __typename?: 'Query' }
  & { books: Array<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'name' | 'price' | 'sale' | 'image'>
    & { author?: Maybe<Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'name'>
    )>> }
  )> }
);

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'image' | 'description'>
  )> }
);


export const AllAuthorsDocument = gql`
    query AllAuthors {
  authors {
    id
    name
    image
  }
}
    `;

/**
 * __useAllAuthorsQuery__
 *
 * To run a query within a React component, call `useAllAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<AllAuthorsQuery, AllAuthorsQueryVariables>) {
        return Apollo.useQuery<AllAuthorsQuery, AllAuthorsQueryVariables>(AllAuthorsDocument, baseOptions);
      }
export function useAllAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAuthorsQuery, AllAuthorsQueryVariables>) {
          return Apollo.useLazyQuery<AllAuthorsQuery, AllAuthorsQueryVariables>(AllAuthorsDocument, baseOptions);
        }
export type AllAuthorsQueryHookResult = ReturnType<typeof useAllAuthorsQuery>;
export type AllAuthorsLazyQueryHookResult = ReturnType<typeof useAllAuthorsLazyQuery>;
export type AllAuthorsQueryResult = Apollo.QueryResult<AllAuthorsQuery, AllAuthorsQueryVariables>;
export const AuthorDocument = gql`
    query Author($slug: String) {
  author(slug: $slug) {
    id
    name
    image
  }
}
    `;

/**
 * __useAuthorQuery__
 *
 * To run a query within a React component, call `useAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAuthorQuery(baseOptions?: Apollo.QueryHookOptions<AuthorQuery, AuthorQueryVariables>) {
        return Apollo.useQuery<AuthorQuery, AuthorQueryVariables>(AuthorDocument, baseOptions);
      }
export function useAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorQuery, AuthorQueryVariables>) {
          return Apollo.useLazyQuery<AuthorQuery, AuthorQueryVariables>(AuthorDocument, baseOptions);
        }
export type AuthorQueryHookResult = ReturnType<typeof useAuthorQuery>;
export type AuthorLazyQueryHookResult = ReturnType<typeof useAuthorLazyQuery>;
export type AuthorQueryResult = Apollo.QueryResult<AuthorQuery, AuthorQueryVariables>;
export const AllBooksDocument = gql`
    query AllBooks {
  books {
    id
    name
    price
    author {
      name
    }
    sale
    image
  }
}
    `;

/**
 * __useAllBooksQuery__
 *
 * To run a query within a React component, call `useAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBooksQuery(baseOptions?: Apollo.QueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
        return Apollo.useQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, baseOptions);
      }
export function useAllBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
          return Apollo.useLazyQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, baseOptions);
        }
export type AllBooksQueryHookResult = ReturnType<typeof useAllBooksQuery>;
export type AllBooksLazyQueryHookResult = ReturnType<typeof useAllBooksLazyQuery>;
export type AllBooksQueryResult = Apollo.QueryResult<AllBooksQuery, AllBooksQueryVariables>;
export const AllCategoriesDocument = gql`
    query allCategories {
  categories(orderBy: {field: "name", direction: ASC}, where: {name: ""}) {
    id
    name
    image
    description
  }
}
    `;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
        return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, baseOptions);
      }
export function useAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, baseOptions);
        }
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesQueryResult = Apollo.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;