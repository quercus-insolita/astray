import React, { useCallback } from 'react';
import { Box, Text } from 'grommet';
import map from 'lodash/map';

import ReportCardGrid from '../../../../components/ReportCardGrid';
import ReportCardList from '../../../../components/ReportCardList';

import { IReport } from '../../../../models/report';
import { ViewType } from '../../models/view';

import './styles.css';

interface IReportsListingProps {
  listings: IReport[];
  viewType: ViewType;
}

const ReportsListing: React.FC<IReportsListingProps> = ({
  listings,
  viewType
}): React.ReactElement => {
  const renderEmptyComponent = () => (
    <Box margin="xlarge">
      <Text textAlign="center">Результати не знайдено.</Text>
    </Box>
  );

  const renderListings = useCallback(
    () => (
      <div
        className={viewType === ViewType.GridView ? 'grid-view-container' : 'card-view-container'}
      >
        {map(listings, (listing, index) => (
          <>
            {viewType === ViewType.GridView ? (
              <ReportCardGrid key={index} listing={listing} />
            ) : (
              <ReportCardList key={index} listing={listing} />
            )}
          </>
        ))}
      </div>
    ),
    [listings, viewType]
  );

  return (
    <div className="listing-container">
      {listings.length ? renderListings() : renderEmptyComponent()}
    </div>
  );
};

export default ReportsListing;
