import React from 'react';
import { useHistory } from 'react-router-dom';
import { Image, Box, Paragraph, Heading, Card, CardBody } from 'grommet';

const ReportPage: React.FC = (): React.ReactElement => {
  const history = useHistory();

  const handleRouteChange = (path: string) => {
    history.push(path);
  };

  return (
    <Box align="center" justify="center" height="90vh">
      <Heading level="2" margin={{ bottom: 'large' }}>
        Про що ви хочете повідомити?
      </Heading>
      <div className="reports-card-container">
        <Card
          elevation="large"
          width="medium"
          margin={{ horizontal: 'medium' }}
          onClick={() => handleRouteChange('/report/lost')}
          className="reports-card"
        >
          <CardBody height="medium" pad={{ vertical: 'large' }}>
            <Image
              fit="contain"
              src="https://www.flaticon.com/svg/vstatic/svg/4044/4044400.svg?token=exp=1613871085~hmac=b74485503793fee093be04da496ac6dd"
              a11yTitle="pet-card-image"
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium', bottom: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              Зникла домашня тварина
            </Heading>
            <Paragraph margin={{ top: 'none' }}>Я є власником зниклого улюбленця.</Paragraph>
          </Box>
        </Card>

        <Card
          elevation="large"
          width="medium"
          margin={{ horizontal: 'medium' }}
          onClick={() => handleRouteChange('/report/found')}
          className="reports-card"
        >
          <CardBody height="medium" pad={{ vertical: 'large' }}>
            <Image
              fit="contain"
              src="https://www.flaticon.com/svg/vstatic/svg/4044/4044304.svg?token=exp=1613871085~hmac=45d59998d00633bbb4da25911a6226eb"
              a11yTitle="pet-card-image"
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium', bottom: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              Знайдена домашня тварина
            </Heading>
            <Paragraph margin={{ top: 'none' }}>Я знайшов домашнього улюбленця.</Paragraph>
          </Box>
        </Card>
      </div>
    </Box>
  );
};

export default ReportPage;
