import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  formField: {
    label: {
      requiredIndicator: true
    }
  }
});

export default theme;
