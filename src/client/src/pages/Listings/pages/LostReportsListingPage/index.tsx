import React from 'react';

import ReportsListingContainer from '../../containers/ReportsListingContainer';

import { ReportType } from '../../models/reports';

const LostReportsListingPage: React.FC = (): React.ReactElement => {
  return <ReportsListingContainer type={ReportType.Lost} />;
};

export default LostReportsListingPage;
