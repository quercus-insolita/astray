import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Paragraph, Heading, Card, CardBody } from 'grommet';

import {
  ReportPageLostSectionLogo,
  ReportPageFoundSectionLogo
} from '../../../../components/images';

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
            <ReportPageLostSectionLogo />
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
            <ReportPageFoundSectionLogo />
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
