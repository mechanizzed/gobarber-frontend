import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#0c1c28" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Novo agendamento confirmado para o dia tal</p>
            <time>há 2 dias</time>
            <button type="button">marcar como lida</button>
          </Notification>

          <Notification>
            <p>Novo agendamento confirmado para o dia tal</p>
            <time>há 2 dias</time>
            <button type="button">marcar como lida</button>
          </Notification>

          <Notification>
            <p>Novo agendamento confirmado para o dia tal</p>
            <time>há 2 dias</time>
            <button type="button">marcar como lida</button>
          </Notification>

          <Notification>
            <p>Novo agendamento confirmado para o dia tal</p>
            <time>há 2 dias</time>
            <button type="button">marcar como lida</button>
          </Notification>

          <Notification>
            <p>Novo agendamento confirmado para o dia tal</p>
            <time>há 2 dias</time>
            <button type="button">marcar como lida</button>
          </Notification>

          <Notification>
            <p>Novo agendamento confirmado para o dia tal</p>
            <time>há 2 dias</time>
            <button type="button">marcar como lida</button>
          </Notification>

          <Notification>
            <p>Novo agendamento confirmado para o dia tal</p>
            <time>há 2 dias</time>
            <button type="button">marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
