import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authContext;
  
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    };

    if (error === 'Invalid credentials') {
      setAlert('Credenciais inválidas.', 'danger');
      clearErrors();
    };
    
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

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

    if (email === '' || password === "") {
      setAlert('Por favor, preencha todos os campos.', 'danger');
    } else {
      loginUser({ email, password });
    };
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
