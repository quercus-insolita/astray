import React from 'react';

import { useReportsListing } from '../../../../contexts/ReportsListingContext';

const ReportsListingViewContainer = () => {
  const { viewType, updateFilter, updateViewType } = useReportsListing();

  return <div />;
};

export default ReportsListingViewContainer;
