import React from 'react';
import { MdDashboard, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '../../services/api';

// icons

import { Container, Title, Header, TimeContainer, TimeCard } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Title>
        <MdDashboard className="mr-05" /> Dashboard
      </Title>

      <Header>
        <button type="button">
          <MdChevronLeft size={36} color="#0c1c28" />
        </button>
        <strong>data</strong>
        <button type="button">
          <MdChevronRight size={36} color="#0c1c28" />
        </button>
      </Header>

      <TimeContainer>
        <TimeCard past>
          <strong>08:00</strong>
          <span>Luciano</span>
        </TimeCard>
        <TimeCard available>
          <strong>09:00</strong>
          <span>em aberto</span>
        </TimeCard>
        <TimeCard>
          <strong>10:00</strong>
          <span>Luciano</span>
        </TimeCard>
        <TimeCard>
          <strong>11:00</strong>
          <span>Luciano</span>
        </TimeCard>
      </TimeContainer>
    </Container>
  );
}
