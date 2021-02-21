import { callWebApi } from '../../../helpers/webApi.helper';

export const loginUser = async data => {
  return await callWebApi({
    endpoint: '_api/login',
    requestData: data,
    type: 'POST'
  });
};

export const registerUser = async data => {
  return await callWebApi({
    endpoint: '_api/register',
    requestData: data,
    type: 'POST'
  });
};
