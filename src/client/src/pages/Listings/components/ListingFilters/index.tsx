import React, { useCallback, useState, useEffect, memo } from 'react';

import { pluralizeString } from '../../../../utils/pluralizeString.util';

import { IBindingCallback1 } from '../../../../models/callback';
import { IListingFilters } from '../../models/filters';

interface IListingFilter {
  totalItems: number;
  updateFilter: IBindingCallback1<IListingFilters>;
}

const ListingsFilters: React.FC<IListingFilter> = ({
  totalItems,
  updateFilter
}): React.ReactElement => {
  const [filters, setFilters] = useState<IListingFilters>({});

  const handleChange = useCallback(
    (prop: string, value: string): void => {
      setFilters(prevState => ({
        ...prevState,
        [prop]: value
      }));
    },
    [setFilters]
  );

  const handleSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {
    updateFilter(filters);
  }, [updateFilter, filters]);

  return (
    <div>
      <div>
        <p>{pluralizeString(totalItems, 'предмет', 'ів')}</p>
      </div>
    </div>
  );
};

const areEqual = ({ totalItems: prevTotalItems }, { totalItems }) => prevTotalItems === totalItems;

export default memo(ListingsFilters, areEqual);
