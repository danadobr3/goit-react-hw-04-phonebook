import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import cssform from '../ContactForm/ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        name === 'name' ? setName(value) : setNumber(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
      
        addContact({ id: nanoid(), name, number });
        setName('');
        setNumber('');
    };

    return (
        <section className={cssform.form}>
            <h1 className={cssform.form__title}>Phonebook</h1>
            <form className={cssform.form__container} onSubmit={handleFormSubmit}>
                <label className={cssform.form__label}>Name</label>
                <input
                    name="name"
                    type="text"
                    className={cssform.form__input}
                    placeholder="Enter name"
                    required
                    value={name}
                    onChange={handleInputChange}
            
                />
                <label className={cssform.form__label}>Number</label>
                <input
                    name="number"
                    type="tel"
                    className={cssform.form__input}
                    placeholder="Enter phone number"
                    required
                    value={number}
                    onChange={handleInputChange}
                />
                <button className={cssform.form__btn} type="submit">
                    Add contact
                </button>
            </form>
        </section>
    );
};
