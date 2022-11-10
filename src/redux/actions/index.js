export const SEND_USER_INFOS = 'SEND_USER_INFOS';
export const PLAYER_SCORE = 'PLAYER_SCORE';
export const PLAYER_ASSERTIONS = 'PLAYERS_ASSERTIONS';

export const sendUserInfos = (payload) => ({
  type: SEND_USER_INFOS,
  payload,
});

export const playerScore = (score) => ({
  type: PLAYER_SCORE,
  payload: score,
});

export const playerAssertions = (payload) => ({
  type: PLAYER_ASSERTIONS,
  payload,
});
