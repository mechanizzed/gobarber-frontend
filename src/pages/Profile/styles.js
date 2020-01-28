import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  min-height: 100vh;
  margin: 60px auto;
  padding: 0 20px;

  button.profileUpdate {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px auto;
    background: #20b2aa;
    border: 0;
    border-radius: 4px;
    height: 44px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#20B2AA')};
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  padding: 20px 20px 10px;
  background: ${lighten(0.04, '#DEE2E6')};
  display: flex;
  flex-direction: column;
  margin: 10px auto 30px auto;
  border-radius: 4px;
  border: 1px solid ${darken(0.02, '#DEE2E6')};

  input {
    background: #fff;
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #20b2aa;
    font-weight: 700;
    margin: 0 0 15px 0;

    &::placeholder {
      color: #c4cad3;
    }
  }

  span {
    margin: -10px 0 20px 0;
    background: #f64c75;
    color: #fff;
    padding: 10px;
    font-size: 12px;
  }
`;

export const Title = styled.strong`
  margin: 0 0 5px;
  color: #20b2aa;
  font-size: 22px;
  font-weight: 700;
`;
