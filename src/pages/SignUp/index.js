import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="goBarber" title="goBarber" />

      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </form>
    </>
  );
}
