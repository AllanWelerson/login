import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root{
    background-color: rgba(47, 53, 66,1.0);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  width: 500px;
  height: 300px;
  background-color: rgba(223, 228, 234,.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input[type=text], input[type=password] {
    margin: 10px 10px;
    border: none;
    width: 200px;
    padding: 5px;
  } 

  button {
    width: 100%;
    border: none;
    padding: 10px;
    background-color:rgba(255, 71, 87,1.0);
    color: #FFF;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;