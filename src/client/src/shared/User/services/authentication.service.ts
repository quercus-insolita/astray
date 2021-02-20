import { callWebApi } from '../../../helpers/webApi.helper';

export const getCurrentUser = async () => {
  return await callWebApi({
    endpoint: 'user',
    type: 'GET'
  });
};
