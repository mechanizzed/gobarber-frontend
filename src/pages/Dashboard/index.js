import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

// icons
import {
  MdDashboard,
  MdChevronLeft,
  MdChevronRight,
  MdDateRange,
} from 'react-icons/md';
import api from '../../services/api';

// icons

import { Container, Title, Header, TimeContainer, TimeCard } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <Title>
        <MdDashboard className="mr-05" /> Dashboard
      </Title>

      <Header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#0c1c28" />
        </button>
        <strong>
          <MdDateRange className="mr-05" /> {dateFormatted}
        </strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#0c1c28" />
        </button>
      </Header>

      <TimeContainer>
        <TimeCard past>
          <strong>08:00</strong>
          <span>Reservado por: Luciano</span>
        </TimeCard>
        <TimeCard available>
          <strong>09:00</strong>
          <span>em aberto</span>
        </TimeCard>
        <TimeCard>
          <strong>10:00</strong>
          <span>Reservado por: Luciano</span>
        </TimeCard>
        <TimeCard>
          <strong>11:00</strong>
          <span>Reservado por: Luciano</span>
        </TimeCard>
      </TimeContainer>
    </Container>
  );
}
