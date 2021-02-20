import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import LoaderWrapper from '../../../../components/LoaderWrapper';
import { ReportsListingProvider } from '../../contexts/ReportsListingContext';
import ReportsListingViewContainer from './containers/ReportListingsViewContainer';

import { RootState } from '../../../../reducers';
import { ReportType } from '../../models/reports';

import { checkIfLoading } from '../../../../store/selectors';
import { getReportsRoutine } from '../../routines';

interface IReportsListingContainerProps {
  type: ReportType;
}

const ReportsListingContainer: React.FC<IReportsListingContainerProps> = ({
  type
}): React.ReactElement => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootState) => checkIfLoading(state, getReportsRoutine.TRIGGER),
    shallowEqual
  );

  const fetchReports = useCallback(() => {
    dispatch(getReportsRoutine({ type }));
  }, [dispatch, type]);

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <LoaderWrapper loading={loading}>
      <ReportsListingProvider data={[]}>
        <ReportsListingViewContainer />
      </ReportsListingProvider>
    </LoaderWrapper>
  );
};

export default ReportsListingContainer;
