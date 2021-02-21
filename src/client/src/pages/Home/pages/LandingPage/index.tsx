import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Box, Grid, Heading, Card, CardBody } from 'grommet';

import {
  LandingPageFoundSectionLogo,
  LandingPageMissingSectionLogo
} from '../../../../components/images';

const LandingPage: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Box align="center">
        <Heading level="2" margin={{ bottom: 'large' }}>
          Можливості Astray
        </Heading>

        <Grid>
          <Box direction="row" align="center" justify="start" margin={{ bottom: 'xlarge' }}>
            <Card elevation="large" width="300px" height="250px" margin={{ horizontal: 'medium' }}>
              <CardBody height="small">
                <LandingPageMissingSectionLogo />
              </CardBody>
            </Card>
            <Box pad={{ bottom: 'medium' }} responsive={false} align="start">
              <Heading level="3" margin={{ vertical: 'small' }} textAlign="start">
                Пошук зниклих тварин
              </Heading>
              <Link to="/search">Детальніше</Link>
            </Box>
          </Box>

          <Box direction="row" align="center">
            <Card elevation="large" width="300px" height="250px" margin={{ horizontal: 'medium' }}>
              <CardBody height="small">
                <LandingPageFoundSectionLogo />
              </CardBody>
            </Card>
            <Box pad={{ bottom: 'medium' }} responsive={false}>
              <Heading level="3" margin={{ vertical: 'small' }} textAlign="start">
                Повідомити про зникнення/знаходження
              </Heading>
              <Link to="/report">Детальніше</Link>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default LandingPage;
