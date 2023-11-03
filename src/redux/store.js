import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { configureStore  } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
 
  persistReducer,
    
}from 'redux-persist'


const persistConfig = {
    key: 'contacts',
    storage
}


export const store = configureStore({
    reducer: { contacts: persistReducer(persistConfig, contactReducer), filter: filterReducer },
    
})

