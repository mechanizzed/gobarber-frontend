import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// Logo
import logo from '../../assets/images/logo.svg';

// Yup validation schema
const schema = Yup.object().shape({
  name: Yup.string().required('Digite seu nome completo'),
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O campo e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Digite uma senha com no mínimo 6 caracteres')
    .required('Digite uma senha'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="goBarber" title="goBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
