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

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [ action.payload, ...state.contacts ],
        loading: false
      };

    case ADD_CONTACT_ERROR:
    case DELETE_CONTACT_ERROR:
    case UPDATE_CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== action.payload),
        loading: false
      };
    
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
      
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
  
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(
          contact => contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false
      };
    
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
    
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        current: null,
        error: null
      };

    default:
      return state;
  };
};
