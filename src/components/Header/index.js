import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// icon
import { MdDashboard, MdPerson } from 'react-icons/md';
import { IoMdLogIn } from 'react-icons/io';

import { signOut } from '../../store/modules/auth/actions';

// components
import Notifications from '../Notifications';

// logo
import logo from '../../assets/images/logo_inside.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="goBarber" title="goBarber" />
          <Link to="/dashboard">
            <MdDashboard className="mr-05" /> DASHBOARD
          </Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">
                <MdPerson className="mr-05" /> Meu perfil
              </Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
              title={profile.name}
            />
            <button type="button" onClick={handleSignOut}>
              <IoMdLogIn /> <span>SAIR</span>
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
