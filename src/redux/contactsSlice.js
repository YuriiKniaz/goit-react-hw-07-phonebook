import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContact } from "./contactsOperations";

const getActions = (type) =>  isAnyOf(fetchContacts[type], addContacts[type], deleteContact[type]);


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [], isLoading: false, isError: null  },
    extraReducers: builder => 
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts = action.payload;
            })
            .addCase(addContacts.fulfilled, (state, action) => {
                state.contacts = [...state.contacts, action.payload];
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.filter(con => con.id !== action.payload.id);
            })
            .addMatcher(getActions('pending'), (state) => {
                state.isLoading = true;
            })
            .addMatcher(getActions('rejected'), (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addMatcher(getActions('fulfilled'), (state) => {
                state.isLoading = false;
                state.isError = null;
    })
})

export const contactReducer = contactsSlice.reducer;
