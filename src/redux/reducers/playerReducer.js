import { SEND_USER_INFOS } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_USER_INFOS:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  default:
    return state;
  }
};

export default playerReducer;
