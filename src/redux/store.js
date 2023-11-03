import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { configureStore  } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
}from 'redux-persist'


const persistConfig = {
    key: 'contacts',
    storage
}


export const store = configureStore({
    reducer: { contacts: persistReducer(persistConfig, contactReducer), filter: filterReducer },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);