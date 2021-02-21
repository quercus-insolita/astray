import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Container } from 'react-bootstrap';

import LoaderWrapper from '../../../../components/LoaderWrapper';
import { ReportsListingProvider } from '../../contexts/ReportsListingContext';
import ReportsListingViewContainer from './containers/ReportListingsViewContainer';

import { RootState } from '../../../../reducers';
import { ReportType } from '../../../../models/report';

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
  const reports = useSelector((state: RootState) => state.reports);

  const fetchReports = useCallback(() => {
    dispatch(getReportsRoutine({ type }));
  }, [dispatch, type]);

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <LoaderWrapper loading={loading}>
      <Container className="mt-3 mb-4">
        <ReportsListingProvider data={reports}>
          <ReportsListingViewContainer />
        </ReportsListingProvider>
      </Container>
    </LoaderWrapper>
  );
};

export default ReportsListingContainer;
