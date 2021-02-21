import React from 'react';
import { useSelector } from 'react-redux';
import { Anchor, Box, Header, Nav } from 'grommet';

const NavigationHeader: React.FC = (): React.ReactElement => {
  const { isAuthenticated } = useSelector(state => state.currentUser);

  return (
    <Header background="transparent" pad="medium">
      <Box direction="row" align="center" gap="small">
        logo
      </Box>

      <Nav direction="row">
        <Anchor href="/" label="Домашня сторінка" />
        <Anchor href="/search" label="Каталог" />
        <Anchor href="/report" label="Оголошення" />
        {!isAuthenticated ? <Anchor href="/login" label="Увійти" /> : null}
      </Nav>
    </Header>
  );
};

export default NavigationHeader;
