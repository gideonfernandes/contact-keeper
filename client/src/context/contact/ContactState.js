import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '99999-9999',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '98888-8888',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '98989-8989',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add contact action

  // Delete contact action

  // Set current contact action

  // Clear current contact action

  // Update contact action

  // Filter contacts action

  // Clear filter action

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      { props.children }
    </ContactContext.Provider>
  )
};

export default ContactState;
