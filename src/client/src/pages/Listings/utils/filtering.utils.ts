import { IReport } from '../../../models/report';
import { IListingFilters } from '../models/filters';

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

export const filterReportsListing = (
  listings: IReport[],
  { type, sex, sortOrder }: IListingFilters
): IReport[] => {
  let result = listings;

  if (type) {
    if (type !== PetTypes.All) {
      // todo: add sorting
    }
  }

  if (sex) {
    if (sex !== PetSex.All) {
      // todo: add sorting
    }
  }

  if (sortOrder) {
    // todo: add sorting
  }

  return result;
};
