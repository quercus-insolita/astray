import React from 'react';

import ReportsListingContainer from '../../containers/ReportsListingContainer';

import { ReportType } from '../../../../models/report';

const FoundReportsListingPage: React.FC = (): React.ReactElement => {
  return <ReportsListingContainer type={ReportType.Found} />;
};

export default FoundReportsListingPage;
