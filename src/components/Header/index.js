import React from 'react';
import { Link } from 'react-router-dom';

// icon
import { MdDashboard, MdPerson } from 'react-icons/md';

// components
import Notifications from '../Notifications';

// logo
import logo from '../../assets/images/logo_inside.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
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
              <strong>Nome user</strong>
              <Link to="/profile">
                <MdPerson className="mr-05" /> Meu perfil
              </Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="username"
              title="username"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
