import React from 'react';
import { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children}) {
  const { 
    handleUpdate, handleRegister, authenticated, handleLogin, username, setUsername, handleLogout, 
    loading, email, password, setEmail, setPassword, setIdUser, idUser
  } = useAuth();
  
  return (
    <Context.Provider value={{ handleUpdate, handleRegister, username, setUsername, authenticated, handleLogin, handleLogout, 
                               setIdUser, idUser, loading,  email, password, setEmail, setPassword }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
