import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import AlertContext from '../../context/alert/alertContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);

  const { current, addContact, clearCurrent, updateContact } = contactContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current)
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    };
  }, [contactContext, current]);

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

    if (name === '' || email === '') {
      setAlert('Por favor, preencha pelo menos menos nome e e-mail.', 'danger');
    } else if (current === null) {
      addContact(contact);
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
      clearAll();
    } else {
      updateContact(contact);
      clearCurrent();
      clearAll();
    };
  };

  function clearAll() {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2
        className="text-primary"
      >{current ? 'Editar Contato' : 'Adicionar Contato'}
      </h2>
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
        value={current ? 'Atualizar Contato' : 'Adicionar novo contato'}
        className="btn btn-block btn-primary"
      />
      {current &&
        <button className="btn btn-block btn-light" onClick={clearAll}>
          Cancelar Edição
        </button>
      }
    </form>
  );
};

export default ContactForm;
