import { callWebApi } from '../../../helpers/webApi.helper';

export const loginUser = async data => {
  return await callWebApi({
    endpoint: 'authentication',
    requestData: data,
    type: 'POST'
  });
};
