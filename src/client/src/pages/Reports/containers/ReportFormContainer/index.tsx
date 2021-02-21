import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import ReportForm from '../../components/ReportForm';

import { ReportType } from '../../../../models/report/ReportTypeEnum';

import { addReportRoutine } from '../../routines';

interface IReportFormContainerProps {
  type: ReportType;
}

const ReportFormContainer: React.FC<IReportFormContainerProps> = ({ type }): React.ReactElement => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    data => {
      dispatch(
        addReportRoutine({
          ...data,
          type
        })
      );
    },
    [dispatch]
  );

  return (
    <div>
      <Container className="mt-2 mb-4">
        <ReportForm handleSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

export default ReportFormContainer;
