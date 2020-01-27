import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      border: 3px solid #20b2aa;
      background: ${darken(0.04, '#20B2AA')};
    }

    input {
      display: none;
    }
  }
`;
