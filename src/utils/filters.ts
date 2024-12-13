import { Car, SearchFilters } from '../types';

export function filterCars(cars: Car[], filters: SearchFilters): Car[] {
  return cars.filter((car) => {
    if (filters.year && car.year.toString() !== filters.year) return false;
    if (filters.color && car.color !== filters.color) return false;
    if (filters.maxPrice && car.price > Number(filters.maxPrice)) return false;
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchableText = `${car.brand} ${car.model} ${car.version}`.toLowerCase();
      if (!searchableText.includes(searchTerm)) return false;
    }
    return true;
  });
}