import React, { useCallback, useState, useEffect, memo } from 'react';
import { Box, Form, Select, FormField, Heading } from 'grommet';

import { pluralizeString } from '../../../../utils/pluralizeString.util';

import { IBindingCallback1 } from '../../../../models/callback';
import { IListingFilters } from '../../models/filters';

enum PetTypes {
  Dog = 'Собака',
  Cat = 'Кішка',
  All = 'Усі'
}

enum PetSex {
  Male = 'Хлопець',
  Female = 'Дівчина',
  All = 'Усі'
}

enum SortOrders {
  ByFoundDate = 'За датою знаходження',
  ByDateAdded = 'За датою заявки'
}

const initialState = {
  sortOrder: null,
  type: null,
  sex: null
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
            options={[PetTypes.Cat, PetTypes.Dog, PetTypes.All]}
            value={filters.type}
            onChange={({ option }) => handleChange('type', option)}
          />
        </FormField>
        <FormField htmlFor="sex" name="sex" label="Cтать тварини">
          <Select
            id="sex"
            name="sex"
            plain={false}
            options={[PetSex.Male, PetSex.Female, PetSex.All]}
            value={filters.sex}
            onChange={({ option }) => handleChange('sex', option)}
          />
        </FormField>
      </Form>
    </Box>
  );
};

const areEqual = ({ totalItems: prevTotalItems }, { totalItems }) => prevTotalItems === totalItems;

export default memo(ListingsFilters, areEqual);
