import React, { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  changeValue = value => {
    this.setState(() => {
      return {
        name: value,
      };
    });
  };

  addContact = (name, id) => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { name, id }],
      };
    });
  };

  render() {
    const { contacts, name } = this.state;

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
