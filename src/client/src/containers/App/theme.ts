import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  formField: {
    label: {
      size: 'small',
      color: 'text-weak',
      requiredIndicator: true,
      margin: {
        start: 'none'
      }
    }
  }
});

export default theme;
