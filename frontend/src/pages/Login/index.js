import React, { useContext } from 'react';

import { Container, Form, GlobalStyle } from './styles';
import { Context } from '../../Context/AuthContext';

function Login() {

  const { authenticated, handleLogin, email, password, setEmail, setPassword } = useContext(Context);

  return <Container>
          <GlobalStyle />
          <Form onSubmit={handleLogin}>
            <label>E-mail</label>
            <input 
              type="text"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}/>
            
            <label>Password</label>
            <input 
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}/>
            
            <button type="submit">Login</button>
          </Form>
         </Container>;
}

export default Login;