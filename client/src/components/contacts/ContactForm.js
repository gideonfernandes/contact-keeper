import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  function onChange(event) {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  function onSubmit(event) {
    event.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Adicionar Contato</h2>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Telefone"
        name="phone"
        value={phone}
        onChange={onChange}
      />

      <h5>Tipo de Contato</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      /> Pessoal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      /> Profissional{' '}
        <input
          type="submit"
          value="Adicionar novo contato"
          className="btn btn-block btn-primary"
        />
    </form>
  );
};

export default ContactForm;
