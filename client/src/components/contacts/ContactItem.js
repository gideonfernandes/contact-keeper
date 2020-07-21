import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { id, name, email, phone, type } = contact;
  
  function onDelete() {
    contactContext.deleteContact(id);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span
          style={{float: 'right'}}
          className={'badge ' +
          (type === 'personal' ? 'badge-primary' : 'badge-success')}
        >
          {type
            .charAt(0)
            .toUpperCase() +
            (type === 'personal' ? 'essoal' : 'rofissional')
          }
        </span>
      </h3>
      <ul className="list">
        {email && (<li><i className="fas fa-envelope-open" /> {email}</li>)}
        {phone && (<li><i className="fas fa-phone" /> {phone}</li>)}
      </ul>
      <button className="btn btn-dark btn-sm">Editar</button>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>Deletar</button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
