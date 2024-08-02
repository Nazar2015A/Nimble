import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactsResponse } from "../../types/contacts";

type ContactTag =
  | { type: "Contacts"; id: string }
  | { type: "Contacts"; id: "LIST" };

export type NewTag = { id: string; tags: string[] };

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${import.meta.env.VITE_TOKEN}`);
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query<ContactsResponse, void>({
      query: () => ({
        url: "/contacts",
        params: {
          sort: "created:desc",
        },
      }),
      providesTags: (result) => {
        if (!result) return [{ type: "Contacts", id: "LIST" }];
        return [
          ...result.resources.map(({ id }) => ({ type: "Contacts", id })),
          { type: "Contacts", id: "LIST" },
        ] as ContactTag[];
      },
    }),
    createContact: builder.mutation<void, any>({
      query: (contact) => ({
        url: "/contact",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    getContact: builder.query<ContactsResponse, string>({
      query: (id) => ({
        url: `/contact/${id}`,
      }),
      providesTags: (_, __, id) => [{ type: "Contacts", id }],
    }),
    addTags: builder.mutation<void, { id: string; tags: string[] }>({
      query: ({ id, tags }) => ({
        url: `/contacts/${id}/tags`,
        method: "PUT",
        body: { tags },
      }),
      invalidatesTags: (_, __, { id }) => [{ type: "Contacts", id }],
    }),
  }),
});

// Експортуйте хуки для використання
export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useGetContactQuery,
  useAddTagsMutation,
} = apiSlice;
