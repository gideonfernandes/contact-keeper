import React, { useState } from 'react';

const Register = () => {
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
    console.log('Register Submit...');
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
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
