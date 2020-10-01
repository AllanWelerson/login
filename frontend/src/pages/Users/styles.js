import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root{
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  margin-top: 100px;
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const ContainerInfo = styled.div`
  margin-top: 30px;

  h3 {
    margin: 10px;
  }
`;

export const Title = styled.h2`
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 10px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  float: right;
  color: #FFF;
  border: none;
  padding: 10px;
  width: 100px;
  background-color: rgba(255, 71, 87,1.0);
  margin: 10px;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input[type=text], input[type=password] {
    margin: 10px 10px;
    border: solid 1px #ccc;
    width: 200px;
    padding: 5px;
  } 

  button {

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
