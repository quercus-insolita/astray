import React from 'react';

import ReportFormContainer from '../../containers/ReportFormContainer';

import { ReportType } from '../../../../models/report';

const AddFoundReportPage: React.FC = (): React.ReactElement => {
  return (
    <div>
      <ReportFormContainer type={ReportType.Found} />
    </div>
  );
};

export default AddFoundReportPage;
