import { TOGGLE_LOGIN } from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN: {
      return { ...state, isLoggedIn: !state.isLoggedIn };
    }
    default:
      return state;
  }
};
