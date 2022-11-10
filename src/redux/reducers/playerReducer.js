import { GET_PLAYER_IMAGE, PLAYER_ASSERTIONS, PLAYER_SCORE, RESET_GLOBAL_STATE, SEND_USER_INFOS } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  src: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_USER_INFOS:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  case PLAYER_SCORE:
    return {
      ...state,
      score: state.score + action.payload,
    };
  case PLAYER_ASSERTIONS:
    return {
      ...state,
      assertions: state.assertions + action.payload,
    };
  case RESET_GLOBAL_STATE:
    return {
      name: '',
      assertions: 0,
      score: 0,
      gravatarEmail: '',
      src: '',
    };
  case GET_PLAYER_IMAGE:
    return {
      ...state,
      src: action.payload,
    };
  default:
    return state;
  }
};

export default playerReducer;
