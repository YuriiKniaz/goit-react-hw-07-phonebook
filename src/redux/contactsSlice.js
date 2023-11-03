import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
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
        // addContacts: {
        //     reducer(state, action) {
        //         state.contacts.push(action.payload);
        //     },
        //     prepare({ name, number }) {
        //         return {
        //             payload: {
        //                 name, number, id: nanoid()
        //             }
        //         }
        //     }
        // },
        // deleteContact: (state, action) => {
        //     const conIndex = state.contacts.findIndex(con => con.id === action.payload);
        //     state.contacts.splice(conIndex, 1);
        // }
   
})

export const contactReducer = contactsSlice.reducer;
// export const { addContacts, deleteContact } = contactsSlice.actions;