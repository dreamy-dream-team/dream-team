import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'

export const apis = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:'/apis'}),
    endpoints: (builder) => ({
        : builder.query<[], string>({
            query: () => '/misquote',
            transformResponse: (response: { data: []}) => response.data,
        }),

    })
})

export const {} = apis
console.log()