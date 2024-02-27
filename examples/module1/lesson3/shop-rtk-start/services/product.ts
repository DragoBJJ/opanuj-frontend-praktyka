import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/Product';

const PRODUCT_API = `https://fakestoreapi.com/`;

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: PRODUCT_API }),
  endpoints: (builder) => ({
    getProductById: builder.query<Product, string>({
      query: (id) => `product/${id}`,
    }),

    getAllProducts: builder.query<Product[], void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductByIdQuery, useGetAllProductsQuery } = productApi;
