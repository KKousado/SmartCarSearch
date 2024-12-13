import React from 'react';
import { Car } from '../types';
import { DollarSign, Info, MapPin } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={car.imageUrl}
          alt={`${car.brand} ${car.model} ${car.version}`}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded backdrop-blur-sm bg-opacity-90">
          {car.source.toUpperCase()}
        </span>
      </div>

      <div className="p-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {car.brand} {car.model}
          </h3>
          <p className="text-sm text-gray-600">{car.version}</p>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            {car.location}
          </div>

          <p className="text-gray-600">
            {car.year} • {car.color} • {car.mileage.toLocaleString()} km
          </p>
          
          <div className="flex items-center text-lg font-bold text-blue-600">
            <DollarSign className="w-5 h-5 mr-1" />
            R$ {car.price.toLocaleString()}
          </div>

          <div className="pt-2 border-t">
            <div className="flex items-center text-sm text-gray-600">
              <Info className="w-4 h-4 mr-1" />
              Valor FIPE:
              <span className="ml-1 font-semibold">
                R$ {car.fipePrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}