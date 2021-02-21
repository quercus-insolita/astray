import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Anchor, Box, Header, Nav } from 'grommet';

import { AppLogo } from '../images';

import { logoutUserRoutine } from '../../shared/User/routines';

const NavigationHeader: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.currentUser);

  const handleLogout = useCallback(() => {
    dispatch(logoutUserRoutine());
  }, [dispatch]);

  return (
    <Header background="transparent" pad="medium">
      <Box direction="row" align="center" gap="small">
        <AppLogo />
        <Heading level="1">Astray</Heading>
      </Box>

      <Nav direction="row">
        <Anchor href="/" label="Домашня сторінка" />
        <Anchor href="/search" label="Каталог" />
        <Anchor href="/report" label="Оголошення" />
        {!isAuthenticated ? (
          <Anchor href="/login" label="Увійти" />
        ) : (
          <Anchor label="Вийти" onClick={handleLogout} />
        )}
      </Nav>
    </Header>
  );
};

export default NavigationHeader;
