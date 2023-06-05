import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'
import { Misquote } from '../shared/interfaces/Misquote'

export const apis = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:'/apis'}),
    endpoints: (builder) => ({
        getAllMisquotes: builder.query<Misquote[], string>({
            query: () => '/misquote',
            transformResponse: (response: { data: Misquote[]}) => response.data,
        }),

    })
})

export const {useGetAllMisquotesQuery} = apis
console.log(useGetAllMisquotesQuery)