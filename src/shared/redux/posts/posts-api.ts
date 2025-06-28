import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../../../modules/Posts/post.model";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'posts',
        }),
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
        }),
        getCommentsByPostId: builder.query({
            query: (postId) => `comments?postId=${postId}`,
        }),
    }),
})


export const { useGetPostsQuery, useGetPostByIdQuery, useGetCommentsByPostIdQuery } = postsApi;

