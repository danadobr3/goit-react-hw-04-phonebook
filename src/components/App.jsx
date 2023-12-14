import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import cssapp from './App.module.css';

const App = () => {
    const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  
const [filter, setFilter] = useState('');

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

const addContact = (newContact) => {
  const loweredCase = newContact.name.toLowerCase().trim();

  const exists = contacts.some(
    (contact) => contact.name.toLowerCase().trim() === loweredCase
  );

  if (exists) {
    alert(`${newContact.name} is already in contacts!`);
  } else {
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);
  }
};
 
  const addFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

   const deleteContact = (id) => {
     setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id)
     );
   }
  
  return (
    <section className={cssapp.content}>
        <div className={cssapp.content__container}>
          <ContactForm addContact={addContact} />
          <ContactList
            contacts={filteredContacts()}
            deleteContact={deleteContact}
          >
            <Filter filter={filter} addFilter={addFilter} />
          </ContactList>
        </div>
      </section>
  );
};

export default App;