import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// ReactLoading
import ReactLoading from 'react-loading';

import { IoMdPersonAdd } from 'react-icons/io';
import { signUpRequest } from '../../store/modules/auth/actions';

// Icons

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
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="goBarber" title="goBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">
          {loading ? (
            <ReactLoading type="bubbles" color="#fff" height={40} width={40} />
          ) : (
            <>
              <IoMdPersonAdd size={20} className="mr-1" /> Criar conta
            </>
          )}
        </button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
