import { callWebApi } from '../../../helpers/webApi.helper';

export const getReportsList = async data => {
  return await callWebApi({
    endpoint: 'reports',
    requestData: data,
    type: 'GET'
  });
};
