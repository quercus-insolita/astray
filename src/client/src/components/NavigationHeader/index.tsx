import React from 'react';
import { Anchor, Box, Header, Nav, Menu, ResponsiveContext } from 'grommet';

const NavigationHeader: React.FC = (): React.ReactElement => {
  return (
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        logo
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label="Click me"
              items={[
                { label: 'Каталог тварин', onClick: () => {} },
                { label: 'Розмістити оголошення', onClick: () => {} }
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="/search" label="Каталог тварин" />
              <Anchor href="/report" label="Розмістити оголошення" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};

export default NavigationHeader;
