import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  function onChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  function onSubmit(event) {
    event.preventDefault();
    console.log('Login Submit...');
  };

  return (
    <div className="form-container">
      <h1>Acessar <span className="text-primary">sua conta</span></h1>
      <form onSubmit={onSubmit}>
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
        <input
          type="submit"
          value="Entrar"
          className="btn btn-block btn-primary"
        />
      </form>
    </div>
  );
};

export default Login;
