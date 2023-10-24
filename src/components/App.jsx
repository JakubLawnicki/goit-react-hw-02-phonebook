import React, { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  changeValue = (value, inputName) => {
    let key;
    this.setState(() => {
      if (inputName === 'name') {
        key = 'name';
      } else {
        key = 'number';
      }

      return {
        [key]: value,
      };
    });
  };

  addContact = (name, number, id) => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { name, number, id }],
        name: '',
        number: '',
      };
    });
  };

  render() {
    const { contacts, name, number } = this.state;
    console.log(this.state);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          fontSize: 40,
          color: '#010101',
          margin: 40,
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          contactName={name}
          contactNumber={number}
          change={this.changeValue}
          add={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter />
        <ContactList list={contacts} />
      </div>
    );
  }
}
