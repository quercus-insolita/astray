import React from 'react';
import { Box, Button } from 'grommet';

import { IconBaseProps } from 'react-icons';
import { FiGrid, FiList } from 'react-icons/fi';

import { IBindingCallback1 } from '../../../../../../models/callback';
import { ViewType } from '../../../../models/view';

import './styles.css';

const GridIcon = (props: IconBaseProps): React.ReactElement => <FiGrid {...props} />;

const ListIcon = (props: IconBaseProps): React.ReactElement => <FiList {...props} />;

interface IViewTypeButtonsProps {
  viewType: ViewType;
  updateViewType: IBindingCallback1<ViewType>;
}

const ViewTypeButtons: React.FC<IViewTypeButtonsProps> = ({
  viewType,
  updateViewType
}): React.ReactElement => {
  return (
    <Box justify="end" direction="row" pad={{ horizontal: 'medium' }}>
      <Button
        aria-label="Grid View Type"
        value={ViewType.GridView}
        onClick={() => updateViewType(ViewType.GridView)}
        className="view-type-button"
        plain={true}
        active={viewType === ViewType.GridView}
        icon={
          <GridIcon
            size={25}
            className={`view-type-button-icon ${viewType === ViewType.GridView && 'active'}`}
          />
        }
        margin="small"
      />
      <Button
        aria-label="List View Type"
        value={ViewType.ListView}
        onClick={() => updateViewType(ViewType.ListView)}
        className="view-type-button"
        plain={true}
        active={viewType === ViewType.ListView}
        icon={
          <ListIcon
            size={25}
            className={`view-type-button-icon ${viewType === ViewType.ListView && 'active'}`}
          />
        }
        margin="small"
      />
    </Box>
  );
};

export default ViewTypeButtons;
