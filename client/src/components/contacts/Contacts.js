import React, { useContext, Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  console.log(contacts)

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Por favor, adicione um novo contato</h4>
  };

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered === null ?
            contacts.map(
              contact => (
                <CSSTransition key={contact._id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              )
            ) :
            filtered.map(
              contact => (
                <CSSTransition key={contact._id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              )
            )
          }
        </TransitionGroup>
      ) : <Spinner />}
    </Fragment>
  );
};

export default Contacts;
