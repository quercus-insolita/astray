import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ReportFormContainer from '../../containers/ReportFormContainer';

import { ReportType } from '../../../../models/report';

const AddLostReportPage: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const { isAuthenticated } = useSelector(state => state.currentUser);

  if (!isAuthenticated) {
    history.push('/login');
  }

  return (
    <div>
      <ReportFormContainer type={ReportType.Lost} />
    </div>
  );
};

export default AddLostReportPage;
