import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

// Logo
import logo from '../../assets/images/logo.svg';

// Yup validation schema
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O campo e-mail é obrigatório'),
  password: Yup.string().required('Digite sua senha'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="goBarber" title="goBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <Link to="/register">Não tem uma conta? Registre-se agora</Link>
      </Form>
    </>
  );
}
