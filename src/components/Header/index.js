import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// icon
import { MdDashboard, MdPerson } from 'react-icons/md';
import { IoMdLogIn } from 'react-icons/io';

// components
import Notifications from '../Notifications';

// logo
import logo from '../../assets/images/logo_inside.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const { profile } = useSelector(state => state.user);
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
            <button type="button">
              <IoMdLogIn /> <span>SAIR</span>
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
