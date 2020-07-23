import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { registerUser, error, clearErrors } = authContext;

  useEffect(() => {
    if ( error === 'User already exists.') {
      setAlert('O usuário já existe.', 'danger');
      clearErrors();
    };
  }, [error]);

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
      registerUser({
        name,
        email,
        password
      });
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
