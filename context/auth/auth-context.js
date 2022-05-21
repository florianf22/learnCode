import * as React from 'react';
import { reducer } from './reducer';

const initialState = {
  isLoggedIn: false,
};

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
