export interface Car {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  price: number;
  color: string;
  mileage: number;
  source: 'webmotors' | 'olx';
  imageUrl: string;
  fipePrice: number;
  location: string;
}

export interface SearchFilters {
  year: string;
  color: string;
  maxPrice: string;
  search: string;
}

export type FilterChangeHandler = (filters: Partial<SearchFilters>) => void;