export const SEND_USER_INFOS = 'SEND_USER_INFOS';

export const sendUserInfos = (payload) => ({
  type: SEND_USER_INFOS,
  payload,
});
