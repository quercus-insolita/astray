import { sortByDate } from '../../../utils/date.util';
import { PetTypeMapping, PetSexMapping, PetColorMapping } from '../../../shared/constants';

import { IReport } from '../../../models/report';
import { IListingFilters } from '../models/filters';

enum SortOrders {
  ByFoundDate = 'За датою знаходження',
  ByDateAdded = 'За датою заявки'
}

enum PetTypeDb {
  Собака = 'dog',
  Кішка = 'cat',
  Усі = 'other'
}

enum PetSexDb {
  Хлопець = 'male',
  Дівчина = 'female',
  Усі = 'notSure'
}

enum PetColorDb {
  Чорний = 'black',
  Коричневий = 'brown',
  Рижий = 'ginger',
  Сірий = 'grey',
  Білий = 'white',
  Усі = 'notSure'
}

export const filterReportsListing = (
  listings: IReport[],
  { type, sex, color, sortOrder }: IListingFilters
): IReport[] => {
  let result = listings;

  if (type) {
    if (type !== PetTypeMapping.All.label) {
      result = listings.filter(item => item.petType === PetTypeDb[type]);
    }
  }
  if (sex) {
    if (sex !== PetSexMapping.All.label) {
      result = listings.filter(item => item.sex === PetSexDb[sex]);
    }
  }

  if (color) {
    if (color !== PetColorMapping.All.label) {
      result = listings.filter(item => item.color === PetColorDb[color]);
    }
  }

  if (sortOrder) {
    if (sortOrder === SortOrders.ByFoundDate) {
      result = sortByDate(result, 'date');
    }
    if (sortOrder === SortOrders.ByDateAdded) {
      result = sortByDate(result, 'createdAt');
    }
  }

  return result;
};
