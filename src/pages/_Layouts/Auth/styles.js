import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: radial-gradient(circle, #212c37, #050e15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 320px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin: 30px auto;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 15px 0;

      &::placeholder {
        color: #808f9f;
      }
    }

    span {
      margin: -10px 0 20px 0;
      background: #f64c75;
      color: #fff;
      padding: 10px;
      font-size: 12px;
    }

    button {
      margin: 10px 0;
      background: #050e15;
      border: 0;
      border-radius: 4px;
      height: 44px;
      color: #fff;
      font-size: 15px;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#050e15')};
      }
    }

    a {
      margin-top: 30px;
      color: #808f9f;
      opacity: 0.8;

      &:hover {
        color: #fff;
      }
    }
  }
`;
