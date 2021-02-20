import { callWebApi } from '../../../helpers/webApi.helper';

export const getReportsList = async ({ type }) => {
  return await callWebApi({
    endpoint: `reports?type=${type}`,
    type: 'GET'
  });
};
