import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [], name: '', number: '' },
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name, number, id: nanoid()
                    }
                }
            }
        },
        deleteContact: (state, action) => {
            const conIndex = state.contacts.findIndex(con => con.id === action.payload);
            state.contacts.splice(conIndex, 1);
        }
    }
})

export const contactReducer = contactsSlice.reducer;
export const { addName, addNumber, addContacts, deleteContact } = contactsSlice.actions;