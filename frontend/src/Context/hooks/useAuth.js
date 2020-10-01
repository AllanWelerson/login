import { useState, useEffect } from 'react';

import api from '../../service/api';
import history from '../../service/history';



export default function useAuth() {
  
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if(token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  
    setLoading(false);
  }, []);
  
  const handleLogin = async event => {
    event.preventDefault();

    try{
      const { data: { token } } = await api.post('/session', {email, password});

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      history.push('/users');     
    }catch(err){
      alert('Erro ao realizar login');
    }

    setEmail('');
    setPassword('');
       
  }

  const handleRegister = async event => {
    event.preventDefault();

      await api
              .post('/users', {email, password, username})
              .then( data => {
              })
              .catch( err => {
                console.log(err);  
                alert('Erro ao cadastrar');
                return false;
              });

      history.push('/login');         
  }

  const handleUpdate = async event => {
    event.preventDefault();

    await api
              .put('/users', {email, password, username})
              .then( data => {
                console.log(data);
              })
              .catch( err => {
                console.log(err);  
                alert('Erro ao atualizar');
                return false;
              });

      history.go('/users');   
  }
  
  function handleLogout(){
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return { handleUpdate, handleRegister, authenticated, handleLogin, handleLogout, username, setUsername, loading, email, password, setEmail, setPassword};
}


