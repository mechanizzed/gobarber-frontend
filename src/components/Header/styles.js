import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #f5f5f5;
  padding: 0 30px;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 900px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #0c1c28;
    }

    a {
      display: flex;
      align-items: center;
      font-weight: 700;
      color: #0c1c28;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #0c1c28;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 36px;
    height: 36px;
    overflow: hidden;
    border-radius: 50%;
  }

  button {
    display: flex;
    align-items: center;
    border: 0;
    padding: 0;
    margin-left: 20px;
    background: transparent;

    span {
      margin-left: 3px;
      font-size: 10px;
      color: #0c1c28;
      font-weight: 700;
    }
  }
`;
