import React, { useState } from 'react';

export const UserContext = React.createContext({
  user: {
    id: null,
    email: null,
    nickname: null,
    isAuthenticated: false,
  },
  setUser: () => {},
});

export const UserProvider = props => {
  const [user, setUser] = useState({
    id: null,
    email: null,
    nickname: null,
    isAuthenticated: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
