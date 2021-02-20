import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { RootState } from '../../reducers';

import LoaderWrapper from '../../components/LoaderWrapper';
import NavigationHeader from '../../components/NavigationHeader';

import LoginPage from '../../pages/Authentication/pages/LoginPage';
import RegisterPage from '../../pages/Authentication/pages/RegisterPage';

import LandingPage from '../../pages/Home/pages/LandingPage';

import ReportPage from '../../pages/Reports/pages/ReportPage';
import AddLostReportPage from '../../pages/Reports/pages/AddLostReportPage';
import AddFoundReportPage from '../../pages/Reports/pages/AddFoundReportPage';

import ReportsListingPage from '../../pages/Listings/pages/ReportsListingPage';
import LostReportsListingPage from '../../pages/Listings/pages/LostReportsListingPage';
import FoundReportsListingPage from '../../pages/Listings/pages/FoundReportsListingPage';

import PetDetailsPage from '../../pages/PetDetails/pages/PetDetailsPage';

import { checkIfLoading } from '../../store/selectors';
import { getCurrentUserRoutine } from '../../shared/User/routines';

const Routing: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootState) => checkIfLoading(state, getCurrentUserRoutine.TRIGGER),
    shallowEqual
  );

  const fetchCurrentUser = useCallback(() => {
    dispatch(getCurrentUserRoutine());
  }, [dispatch]);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const renderLogin = loginProps => <LoginPage {...loginProps} />;

  const renderRegistration = regProps => <RegisterPage {...regProps} />;

  return (
    <Switch>
      <NavigationHeader />
      <LoaderWrapper loading={loading}>
        <Switch>
          <Route exact={true} path="/" render={() => <LandingPage />} />
          <Route exact={true} path="/login" component={renderLogin} />
          <Route exact={true} path="/register" component={renderRegistration} />
          <Route exact={true} path="/report" render={() => <ReportPage />} />
          <Route exact={true} path="/report/found" render={() => <AddFoundReportPage />} />
          <Route exact={true} path="/report/lost" render={() => <AddLostReportPage />} />
          <Route exact={true} path="/search" render={() => <ReportsListingPage />} />
          <Route exact={true} path="/search/found" render={() => <FoundReportsListingPage />} />
          <Route exact={true} path="/search/lost" render={() => <LostReportsListingPage />} />
          <Route exact={true} path="/:id" render={() => <PetDetailsPage />} />
        </Switch>
      </LoaderWrapper>
    </Switch>
  );
};

export default Routing;
