import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  ADD_CONTACT_ERROR,
  DELETE_CONTACT,
  DELETE_CONTACT_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  UPDATE_CONTACT_ERROR,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CONTACTS
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get contacts action
  const getContacts = async () =>{
    try {
      const response = await axios.get('http://localhost:8888/api/contacts');

      dispatch({ type: GET_CONTACTS, payload: response.data });
    } catch (error) {
    };
  };

  // Add contact action
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.post(
        'http://localhost:8888/api/contacts',
        contact,
        config
      );

      dispatch({ type: ADD_CONTACT, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_CONTACT_ERROR, payload: error.response.message });
    };
  };

  // Update contact action
  const updateContact = async currentContact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.put(
        `http://localhost:8888/api/contacts/${currentContact._id}`,
        currentContact,
        config
      );

      dispatch({ type: UPDATE_CONTACT, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_CONTACT_ERROR, payload: error.response.message });
    };
  };

  // Delete contact action
  const deleteContact = async contactId => {
    try {
      await axios.delete(`http://localhost:8888/api/contacts/${contactId}`);

      dispatch({ type: DELETE_CONTACT, payload: contactId });
    } catch (error) {
      dispatch({ type: DELETE_CONTACT_ERROR, payload: error.response.message })
    };

  };

  // Set current contact action
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current contact action
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter contacts action
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear filter action
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Clear contacts action
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts
      }}
    >
      { props.children }
    </ContactContext.Provider>
  )
};

export default ContactState;
