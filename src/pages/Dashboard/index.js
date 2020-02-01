import React, { useState, useEffect, useMemo } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

// icons
import {
  MdDashboard,
  MdChevronLeft,
  MdChevronRight,
  MdDateRange,
} from 'react-icons/md';

import api from '../../services/api';

import { Container, Title, Header, TimeContainer, TimeCard } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [schedules, setSchedules] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedules() {
      const response = await api.get('schedules', {
        params: { date },
        // params: { date: '2020-01-28T02:56:58.604Z' },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        // const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setSchedules(data);
    }

    loadSchedules();
  }, [date]);

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
        {schedules.map(schedule => (
          <TimeCard
            key={schedule.id}
            past={schedule.past}
            available={!schedule.appointment}
          >
            <strong>{schedule.time}</strong>
            <span>
              {schedule.appointment
                ? `Reservado por: ${schedule.appointment.user.name}`
                : 'Em aberto'}
            </span>
          </TimeCard>
        ))}
      </TimeContainer>
    </Container>
  );
}
