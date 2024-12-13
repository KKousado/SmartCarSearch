import React from 'react';
import { Search, Calendar, Palette, DollarSign } from 'lucide-react';
import { FilterChangeHandler } from '../types';

interface SearchFiltersProps {
  onFilterChange: FilterChangeHandler;
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Calendar className="w-4 h-4 inline-block mr-1" />
            Ano
          </label>
          <select
            name="year"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Todos os anos</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Palette className="w-4 h-4 inline-block mr-1" />
            Cor
          </label>
          <select
            name="color"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Todas as cores</option>
            <option value="Branco">Branco</option>
            <option value="Preto">Preto</option>
            <option value="Prata">Prata</option>
            <option value="Azul">Azul</option>
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <DollarSign className="w-4 h-4 inline-block mr-1" />
            Preço Máximo
          </label>
          <input
            type="number"
            name="maxPrice"
            onChange={handleChange}
            placeholder="R$ Máximo"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Search className="w-4 h-4 inline-block mr-1" />
            Buscar
          </label>
          <input
            type="text"
            name="search"
            onChange={handleChange}
            placeholder="Marca ou modelo"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}