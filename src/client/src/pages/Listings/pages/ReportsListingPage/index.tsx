import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Paragraph, Heading, Card, CardBody, Image } from 'grommet';

import './styles.css';

const ReportsListingPage: React.FC = (): React.ReactElement => {
  const history = useHistory();

  const handleRouteChange = (path: string) => {
    history.push(path);
  };

  return (
    <Box align="center" justify="center" height="90vh">
      <Heading level="2" margin={{ bottom: 'large' }}>
        Яких домашніх тварин ви хотіли б переглянути?
      </Heading>
      <div className="reports-card-container">
        <Card
          elevation="large"
          width="medium"
          margin={{ horizontal: 'medium' }}
          onClick={() => handleRouteChange('/search/lost')}
          className="reports-card"
        >
          <CardBody height="medium" pad={{ vertical: 'large' }}>
            <Image
              fit="contain"
              src="https://www.flaticon.com/svg/vstatic/svg/4044/4044211.svg?token=exp=1613871085~hmac=6e35eb9cb0a2e6ce2a8cde2a4effad7c"
              a11yTitle="pet-card-image"
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium', bottom: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              Зниклі домашні тварини
            </Heading>
            <Paragraph margin={{ top: 'none' }}>
              Переглядайте домашніх тварин, про яких повідомив зниклими їх власник.
            </Paragraph>
          </Box>
        </Card>

        <Card
          elevation="large"
          width="medium"
          margin={{ horizontal: 'medium' }}
          onClick={() => handleRouteChange('/search/found')}
          className="reports-card"
        >
          <CardBody height="medium" pad={{ vertical: 'large' }}>
            <Image
              fit="contain"
              src="https://www.flaticon.com/svg/vstatic/svg/4044/4044232.svg?token=exp=1613871085~hmac=96b352176b3fb2b676066fc38993eb47"
              a11yTitle="pet-card-image"
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium', bottom: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              Знайдені домашні тварини
            </Heading>
            <Paragraph margin={{ top: 'none' }}>
              Перегляньте домашніх тварин, про яких повідомляють, що їх знайшли представники
              громадськості.
            </Paragraph>
          </Box>
        </Card>
      </div>
    </Box>
  );
};

export default ReportsListingPage;
