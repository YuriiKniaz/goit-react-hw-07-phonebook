import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContact } from "./contactsOperations";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [], isLoading: false, isError: null  },
    extraReducers: builder => 
        builder
            .addCase(fetchContacts.pending, (state, action) => {
            state.isLoading = true;
                state.isError = null;
                state.contacts = [];
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
            .addCase(addContacts.pending, (state, action) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(addContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = [...state.contacts, action.payload];
                
            })
            .addCase(addContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
            .addCase(deleteContact.pending, (state, action) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter(con => con.id !== action.payload.id);

            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
    })
       
       
   
})

export const contactReducer = contactsSlice.reducer;
