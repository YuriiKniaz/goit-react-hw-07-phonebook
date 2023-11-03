import React from 'react';
import app from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div className={app.block}>
      <h1 className={app.firstTitle}>Phonebook</h1>
      <ContactForm />

      <h2 className={app.secondTitle}>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
};
