import React, { useContext } from 'react';

import { Container, Form, GlobalStyle } from './styles';
import { Context } from '../../Context/AuthContext';

function Register() {

  const { handleRegister, email, password, username, setEmail, setPassword, setUsername } = useContext(Context);

  return <Container>
          <GlobalStyle />
          <Form onSubmit={handleRegister}>
            <label>Username</label>
            <input 
              type="text"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}/>
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

export default Register;