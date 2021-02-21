import React from 'react';
import { Container } from 'react-bootstrap';

import ReportForm from '../../components/ReportForm';

import { ReportType } from '../../../../models/report/ReportTypeEnum';

interface IReportFormContainerProps {
  type: ReportType;
}

const ReportFormContainer: React.FC<IReportFormContainerProps> = ({ type }): React.ReactElement => {
  const handleSubmit = () => {};

  return (
    <div>
      <Container className="mt-2 mb-4">
        <ReportForm handleSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

export default ReportFormContainer;
