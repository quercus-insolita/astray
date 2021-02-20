import React, { useState, useContext, createContext, useMemo } from 'react';

import { filterReportsListing } from '../../utils/filtering.utils';

import { ViewType } from '../../models/view';
import { IListingFilters } from '../../models/filters';
import { IReport } from '../../../../models/report';

interface ReportsListingContextData {}

export const ReportsListingContext = createContext<ReportsListingContextData>(
  {} as ReportsListingContextData
);

export const ReportsListingProvider: React.FC<{
  data: IReport[];
  children: React.ReactNode;
}> = ({ children }) => {
  const [viewType, setViewType] = useState<ViewType>(ViewType.GridView);
  const [filters, applyFilters] = useState<IListingFilters>({} as IListingFilters);

  const reportsListingContext = useMemo(
    () => ({
      updateFilter: (appliedFilters: IListingFilters): void => {
        applyFilters(appliedFilters);
      },
      updateViewType: (view: ViewType): void => setViewType(view)
    }),
    []
  );

  // const filteredData = filterReportsListing(data, filters);

  return (
    <ReportsListingContext.Provider value={{ viewType, ...reportsListingContext }}>
      {children}
    </ReportsListingContext.Provider>
  );
};

export const useReportsListing = (): ReportsListingContextData => {
  const context = useContext(ReportsListingContext);

  return context;
};
