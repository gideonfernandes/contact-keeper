import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = user;

  function onChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  function onSubmit(event) {
    event.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Por favor, preencha todos os campos.', 'danger');
    } else if (password !== confirmPassword) {
      setAlert('As senhas não correspondem.', 'danger');
    } else {
      console.log('Register Submit...');
    };
  };

  return (
    <div className="form-container">
      <h1>Registrar <span className="text-primary">nova conta</span></h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Criar nova conta"
          className="btn btn-block btn-primary"
        />
      </form>
    </div>
  );
};

export default Register;
