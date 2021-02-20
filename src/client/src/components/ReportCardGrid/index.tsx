import React from 'react';

import { Box, Card, CardBody, Heading, Image, Paragraph } from 'grommet';

interface IReportCardGridProps {
  listing: any;
}

const ReportCardGrid: React.FC<IReportCardGridProps> = ({ listing }): React.ReactElement => {
  return (
    <Box pad="medium" align="start">
      <Card elevation="medium" width="medium">
        <CardBody height="small">
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" a11yTitle="bridge" />
        </CardBody>
        <Box pad="medium" responsive={true}>
          <Paragraph margin={{ top: 'none' }}>Location </Paragraph>
          <Paragraph margin={{ top: 'none' }}>Color</Paragraph>
        </Box>
      </Card>
    </Box>
  );
};

export default ReportCardGrid;
