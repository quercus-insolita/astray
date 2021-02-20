import { callWebApi } from '../../../helpers/webApi.helper';

export const loginUser = async data => {
  return await callWebApi({
    endpoint: 'authentication',
    requestData: data,
    type: 'POST'
  });
};

export const registerUser = async data => {
  return await callWebApi({
    endpoint: 'registration',
    requestData: data,
    type: 'POST'
  });
};
