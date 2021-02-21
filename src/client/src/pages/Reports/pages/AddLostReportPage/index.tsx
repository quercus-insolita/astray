import React from 'react';

import ReportFormContainer from '../../containers/ReportFormContainer';

import { ReportType } from '../../../../models/report';

const AddLostReportPage: React.FC = (): React.ReactElement => {
  return (
    <div>
      <ReportFormContainer type={ReportType.Lost} />
    </div>
  );
};

export default AddLostReportPage;
