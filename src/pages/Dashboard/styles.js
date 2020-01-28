import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
`;

export const Title = styled.strong`
  margin: 0 0 5px;
  color: #20b2aa;
  font-size: 22px;
  font-weight: 700;
  display: flex;

  align-items: center;
`;

export const Header = styled.header`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  align-content: center;
  background: ${lighten(0.04, '#DEE2E6')};
  border: 1px solid ${darken(0.02, '#DEE2E6')};
  padding: 10px;

  button {
    border: 0;
    background: none;
  }

  strong {
    display: flex;
    align-items: center;
    color: #0c1c28;
    font-size: 24px;
    margin: 0 50px;
  }
`;

export const TimeContainer = styled.ul`
  list-style: none;
  padding: 20px;
  border-radius: 4px;
  background: ${lighten(0.04, '#DEE2E6')};
  border: 1px solid ${darken(0.02, '#DEE2E6')};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;

  @media only screen and (max-width: 900px) {
    && {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
    }
  }
`;

export const TimeCard = styled.li`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 15px;

  opacity: ${props => (props.past ? 0.4 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#20b2aa' : '#ff892e')};
    font-size: 28px;
    font-weight: 700;
  }

  span {
    display: block;
    margin-top: 5px;
    color: ${props => (props.available ? '#20b2aa' : '#ff892e')};
  }
`;
