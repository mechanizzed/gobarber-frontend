import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

// Logo
import logo from '../../assets/images/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="goBarber" title="goBarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <Link to="/register">Não tem uma conta? Registre-se agora</Link>
      </Form>
    </>
  );
}
