import { callWebApi } from '../../../helpers/webApi.helper';

export const getReportsList = async ({ type }) => {
  return await callWebApi({
    endpoint: `_api/reports?type=${type}`,
    type: 'GET'
  });
};
