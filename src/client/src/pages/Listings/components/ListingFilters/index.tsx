import React, { useCallback, useState, useEffect, memo } from 'react';
import { Box, Form, Select, FormField, Heading } from 'grommet';

import { pluralizeString } from '../../../../utils/pluralizeString.util';

import { IBindingCallback1 } from '../../../../models/callback';
import { IListingFilters } from '../../models/filters';

import { PetTypeMapping, PetSexMapping, PetColorMapping } from '../../../../shared/constants';

enum SortOrders {
  ByFoundDate = 'За датою знаходження',
  ByDateAdded = 'За датою заявки'
}

const initialState = {
  sortOrder: null,
  type: null,
  sex: null,
  color: null
};

interface IListingFilter {
  totalItems: number;
  updateFilter: IBindingCallback1<IListingFilters>;
}

const ListingsFilters: React.FC<IListingFilter> = ({
  totalItems,
  updateFilter
}): React.ReactElement => {
  const [filters, setFilters] = useState<IListingFilters>(initialState);

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
    <Box margin={{ right: 'xlarge', top: 'xlarge' }}>
      <Form onSubmit={handleSubmit}>
        <Heading level="3" margin={{ bottom: 'medium' }}>
          Фільтри пошуку
        </Heading>
        <FormField htmlFor="sortOrder" name="sortOrder" label="Сортувати за датою" size={1}>
          <Select
            id="sortOrder"
            name="sortOrder"
            plain={false}
            options={[SortOrders.ByDateAdded, SortOrders.ByFoundDate]}
            value={filters.sortOrder}
            onChange={({ option }) => handleChange('sortOrder', option)}
          />
        </FormField>

        <FormField htmlFor="type" name="type" label="Тип тварини">
          <Select
            id="type"
            name="type"
            plain={false}
            options={[PetTypeMapping.Cat.label, PetTypeMapping.Dog.label, PetTypeMapping.All.label]}
            value={filters.type}
            onChange={({ option }) => handleChange('type', option)}
          />
        </FormField>
        <FormField htmlFor="sex" name="sex" label="Cтать тварини">
          <Select
            id="sex"
            name="sex"
            plain={false}
            options={[
              PetSexMapping.Male.label,
              PetSexMapping.Female.label,
              PetSexMapping.All.label
            ]}
            value={filters.sex}
            onChange={({ option }) => handleChange('sex', option)}
          />
        </FormField>
        <FormField htmlFor="color" name="color" label="Колір тварини">
          <Select
            id="color"
            name="color"
            plain={false}
            options={[
              PetColorMapping.Black.label,
              PetColorMapping.Brown.label,
              PetColorMapping.Ginger.label,
              PetColorMapping.Grey.label,
              PetColorMapping.White.label,
              PetColorMapping.All.label
            ]}
            value={filters.color}
            onChange={({ option }) => handleChange('color', option)}
          />
        </FormField>
      </Form>
    </Box>
  );
};

const areEqual = ({ totalItems: prevTotalItems }, { totalItems }) => prevTotalItems === totalItems;

export default memo(ListingsFilters, areEqual);
