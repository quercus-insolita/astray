import React from 'react';

import { Box, Card, CardBody, Heading, Image, Paragraph } from 'grommet';

interface IReportCardGridProps {
  listing: any;
}

const ReportCardGrid: React.FC<IReportCardGridProps> = ({ listing }): React.ReactElement => {
  return (
    <Box pad="medium" align="start">
      <Card elevation="large" width="medium">
        <CardBody height="small">
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" a11yTitle="bridge" />
        </CardBody>
        <Box pad={{ horizontal: 'medium' }} responsive={false}>
          <Heading level="3" margin={{ vertical: 'medium' }}>
            Bridge
          </Heading>
          <Paragraph margin={{ top: 'none' }}>
            A structure carrying a road, path, railroad, or canal across a river, ravine, road,
            railroad, or other obstacle.
          </Paragraph>
        </Box>
      </Card>
    </Box>
  );
};

export default ReportCardGrid;
