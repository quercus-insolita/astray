import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Image, Box, Grid, Heading, Card, CardBody } from 'grommet';

const LandingPage: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Box align="center">
        <Heading level="2" margin={{ bottom: 'large' }}>
          Що Ви можете зробити?
        </Heading>

        <Grid>
          <Box direction="row" align="center" justify="end" margin={{ bottom: 'xlarge' }}>
            <Box pad={{ bottom: 'medium' }} responsive={false} align="end">
              <Heading level="3" margin={{ vertical: 'small' }} textAlign="end">
                Пошук зниклих тварин
              </Heading>
              <Link to="/search">Детальніше</Link>
            </Box>
            <Card elevation="large" width="300px" height="250px" margin={{ horizontal: 'medium' }}>
              <CardBody height="small">
                <Image
                  fit="cover"
                  src="https://www.flaticon.com/svg/vstatic/svg/4044/4044204.svg?token=exp=1613873826~hmac=9241adc20b91f836c31b227b0b7f3044"
                  a11yTitle="pet-card-image"
                />
              </CardBody>
            </Card>
          </Box>

          <Box direction="row" align="center">
            <Card elevation="large" width="300px" height="250px" margin={{ horizontal: 'medium' }}>
              <CardBody height="small">
                <Image
                  fit="cover"
                  src="https://www.flaticon.com/svg/vstatic/svg/4044/4044386.svg?token=exp=1613873826~hmac=daeae87ab54840981ed9fc0de9d8c391"
                  a11yTitle="pet-card-image"
                />
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
