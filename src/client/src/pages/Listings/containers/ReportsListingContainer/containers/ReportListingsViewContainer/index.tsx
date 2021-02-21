import React from 'react';
import { Box } from 'grommet';

import usePagination from '../../../../../../hooks/usePagination';
import Paginator from '../../../../../../components/Paginator';
import { useReportsListing } from '../../../../contexts/ReportsListingContext';
import ReportsListing from '../../../../components/ReportsListing';
import ListingFilters from '../../../../components/ListingFilters';
import ViewTypeButtons from '../../components/ViewTypeButtons';

import { IListingFilters } from '../../../../models/filters';

const ReportsListingViewContainer: React.FC = (): React.ReactElement => {
  const { viewType, updateFilter, updateViewType } = useReportsListing();
  const {
    totalPages,
    currentPage,
    handlePageChange,
    resetPagination,
    nextEnabled,
    pageSize
  } = usePagination(0);

  const handleUpdateFilter = (filter: IListingFilters): void => {
    resetPagination();
    updateFilter(filter);
  };

  const offset = (currentPage - 1) * pageSize;
  //const currentListings = filteredData.slice(offset, offset + pageSize);
  const currentListings = [];

  return (
    <Box direction="row">
      <ListingFilters updateFilter={handleUpdateFilter} totalItems={0} />
      <div style={{ flex: 1 }}>
        <ViewTypeButtons viewType={viewType} updateViewType={updateViewType} />
        <ReportsListing listings={currentListings} viewType={viewType} />
        {nextEnabled && (
          <div>
            <Paginator
              totalPages={totalPages}
              currentPage={currentPage}
              changePageHandler={handlePageChange}
            />
          </div>
        )}
      </div>
    </Box>
  );
};

export default ReportsListingViewContainer;
