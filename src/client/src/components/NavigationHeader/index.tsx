import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Image, Anchor, Box, Header, Nav } from 'grommet';

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
        <Image
          fit="contain"
          src="https://www.flaticon.com/svg/vstatic/svg/4044/4044218.svg?token=exp=1613882205~hmac=77d183c06d112a44e416925142b48616"
          width="75px"
          height="75px"
        />
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
