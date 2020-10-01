import React, { useState, useEffect, useContext } from 'react';

import { Container, GlobalStyle, Button, ContainerInfo, Title, Form } from './styles';

import api from '../../service/api';

import { Context } from '../../Context/AuthContext';

function Users() {

  const { handleUpdate, email, password, username, setEmail, setPassword, setUsername } = useContext(Context);

  const { handleLogout } = useContext(Context);
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users'); 
      setUser(data);
    })();
  }, []);
  return <Container>
            <GlobalStyle />
            <div>
              <Button type='button' onClick={handleLogout}>Sair</Button>
              <Button type='button' onClick={() =>  setEdit(!edit)}>
                { edit ? 'Info' : 'Editar' }
              </Button>
            </div>

            {edit 
                  ?
                  <ContainerInfo>
                    <Title>Editar</Title>
                    <Form onSubmit={handleUpdate}>
                      
                      <h3>Nome</h3>
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
                        onChange={e => setPassword(e.target.value)}/>
                      
                      <button type="submit">Atualizar</button>
                    </Form>
                  </ContainerInfo>
                  :
                  <ContainerInfo>
                    <Title>Informações</Title>
                    <h3>Nome</h3>
                    <p>{user.username}</p>
                    <h3>E-mail</h3>
                    <p>{user.email}</p> 
                  </ContainerInfo>
            }
            
            
                       
         </Container>;
}

export default Users;