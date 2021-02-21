import React from 'react';
import { Anchor, Box, Header, Nav } from 'grommet';

const NavigationHeader: React.FC = (): React.ReactElement => {
  return (
    <Header background="transparent" pad="medium">
      <Box direction="row" align="center" gap="small">
        logo
      </Box>

      <Nav direction="row">
        <Anchor href="/" label="Домашня сторінка" />
        <Anchor href="/search" label="Каталог тварин" />
        <Anchor href="/report" label="Розмістити оголошення" />
        <Anchor href="/report" label="Увійти" />
      </Nav>
    </Header>
  );
};

export default NavigationHeader;
