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
                { label: 'This is', onClick: () => {} },
                { label: 'The Menu', onClick: () => {} },
                { label: 'Component', onClick: () => {} }
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="#" label="This is" />
              <Anchor href="#" label="The Nav" />
              <Anchor href="#" label="Component" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};

export default NavigationHeader;
