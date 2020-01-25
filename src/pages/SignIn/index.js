import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="goBarber" title="goBarber" />

      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <Link to="/register">Não tem uma conta? Registre-se agora</Link>
      </form>
    </>
  );
}
