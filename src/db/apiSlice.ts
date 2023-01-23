import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config";
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.base_url }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    getAllblogs: builder.query({
      query: () => "blogs",
    }),
    getSingleBlog: builder.query({
      query: (id) => `blogs/${id}`,
    }),
    addNewBlog: builder.mutation({
      query: (payload) => ({
        url: "/blogs",
        method: "POST",
        body: payload.body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${payload.token}`,
        },
      }),
      invalidatesTags: ["Blogs"],
    }),
    getAllComments: builder.query({
      query: (blogId) => `blogs/${blogId}/comments`,
    }),
    getAllUsers: builder.query({
      query: (token) => ({
        url: "auth/users",
        method: "GET",
        headers: [["Authorization", `Bearer ${token}`]],
      }),
    }),
    deleteUser: builder.mutation({
      query: ({ token, id }) => ({
        url: `auth/users/${id}`,
        method: "DELETE",
        headers: [["Authorization", `Bearer ${token}`]],
      }),
    }),
    // deleteComment: builder.mutation({
    //   query: ({ token, id }) => ({
    //     url: `auth/users/${id}`,
    //     method: "DELETE",
    //     headers: [["Authorization", `Bearer ${token}`]],
    //   }),
    // }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload.body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const {
  useGetAllblogsQuery,
  useGetSingleBlogQuery,
  useGetAllUsersQuery,
  useAddNewBlogMutation,
  useLoginUserMutation,
  useDeleteUserMutation,
} = blogApi;
