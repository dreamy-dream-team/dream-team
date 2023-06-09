import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { apis } from './apis'
import { setupListeners } from '@reduxjs/toolkit/query'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import auth from "./auth.ts";

const reducer = combineReducers({api: apis.reducer, auth})

export const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apis.middleware)
})

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector