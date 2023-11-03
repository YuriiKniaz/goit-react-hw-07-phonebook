import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://654531285a0b4b04436dcc98.mockapi.io'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const response = (await axios.get('/contacts')).data;
        return response;
    }
);

export const addContacts = createAsyncThunk(
    'contacts/addContact',
    async (contacts) => {
        const response = (await axios.post('/contacts', contacts)).data;
        return response;
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        const response = (await axios.delete(`/contacts/${id}`)).data;
        return response;
    }
);