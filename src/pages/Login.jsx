import React, { useEffect, useState } from 'react';

const SIX = 6;

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  function isFormValid() {
    const emailRegex = /\S+@\S+\.\S+/;
    if (loginData.password.length <= SIX) return false;
    if (!emailRegex.test(loginData.email)) return false;
    return true;
  }

  useEffect(() => {
    isFormValid();
  }, [loginData]);

  return (
    <>
      <div>Login</div>
      <div>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          className="email"
          value={ loginData.email }
          onChange={ (e) => setLoginData({ ...loginData, email: e.target.value }) }
          placeholder="Email"
        />
      </div>
      <div>
        <input
          data-testid="password-input"
          type="password"
          name="password"
          className="password"
          value={ loginData.password }
          onChange={ (e) => setLoginData({ ...loginData, password: e.target.value }) }
          placeholder="Senha"
        />
      </div>
      <button
        data-testid="login-submit-btn"
        type="button"
        className="button-enter"
        disabled={ !isFormValid() }
      >
        Enter
      </button>
    </>
  );
}

export default Login;
