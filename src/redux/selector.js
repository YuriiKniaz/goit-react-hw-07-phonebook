import { createSelector } from "@reduxjs/toolkit"

export const selectContacts = state => state.contacts.contacts  
export const selectFilter = state => state.filter.filter  
export const selectLoading = state => state.contacts.isLoading 
export const selectError = state => state.contacts.isError
    


// export const selectFilteredContacts = createSelector(
//     [selectContacts, selectFilter],
//     (contacts, filter) => {
//     contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
// );
// }
// ) 