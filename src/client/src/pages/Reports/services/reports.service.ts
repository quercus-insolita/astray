import { callWebApi } from '../../../helpers/webApi.helper';

export const createReport = async data => {
  return await callWebApi({
    endpoint: '_api/reports',
    requestData: data,
    type: 'POST'
  });
};
