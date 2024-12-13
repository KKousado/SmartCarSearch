import React, { useState, useMemo } from 'react';
import { SearchFilters } from './components/SearchFilters';
import { CarCard } from './components/CarCard';
import { cars } from './data/mockData';
import { SearchFilters as SearchFiltersType } from './types';
import { filterCars } from './utils/filters';
import { Car as CarIcon } from 'lucide-react';

function App() {
  const [filters, setFilters] = useState<SearchFiltersType>({
    year: '',
    color: '',
    maxPrice: '',
    search: '',
  });

  const filteredCars = useMemo(() => filterCars(cars, filters), [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <CarIcon className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Busca Inteligente de Veículos
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <SearchFilters onFilterChange={(newFilters) => {
          setFilters(prev => ({ ...prev, ...newFilters }));
        }} />

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {filteredCars.length} veículos encontrados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Nenhum veículo encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;