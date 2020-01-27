import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdRefresh } from 'react-icons/md';

import { updateProfileRequest } from '../../store/modules/user/actions';

// component
import Avatar from './Avatar';

import { Container, FormGroup, Title } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  function handleUpdate(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleUpdate}>
        <Title>Dados do perfil</Title>
        <FormGroup>
          <Avatar name="avatar_id" />
          <Input name="name" placeholder="Nome completo" />
          <Input name="email" type="email" disabled placeholder="E-mail" />
        </FormGroup>

        <Title>Dados de segurança</Title>
        <FormGroup>
          <Input
            type="password"
            name="oldPassword"
            placeholder="Sua senha atual"
          />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="Confirmar nova senha"
          />
        </FormGroup>
        <button className="profileUpdate" type="submit">
          <MdRefresh size={20} className="mr-1" /> Atualizar perfil
        </button>
      </Form>
    </Container>
  );
}
