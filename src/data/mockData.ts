import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Corolla',
    version: 'GLI 2.0 16V FLEX AUT.',
    year: 2020,
    price: 98000,
    color: 'Branco',
    mileage: 45000,
    source: 'webmotors',
    imageUrl: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240219/toyota-corolla-2.0-vvtie-gli-direct-shift-flex-wmimagem10115741078.jpg',
    fipePrice: 95000,
    location: 'São Paulo - SP'
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'Civic',
    version: 'EXL 2.0 16V FLEX AUT.',
    year: 2021,
    price: 105000,
    color: 'Prata',
    mileage: 32000,
    source: 'olx',
    imageUrl: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240215/honda-civic-2.0-16v-flexone-exl-cvt-wmimagem1012457067.jpg',
    fipePrice: 102000,
    location: 'Curitiba - PR'
  },
  {
    id: '3',
    brand: 'Hyundai',
    model: 'HB20',
    version: 'DIAMOND 1.0 TURBO AUT.',
    year: 2022,
    price: 82900,
    color: 'Preto',
    mileage: 28000,
    source: 'webmotors',
    imageUrl: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240219/hyundai-hb20-1.0-tgdi-flex-diamond-automatico-wmimagem10120055353.jpg',
    fipePrice: 80000,
    location: 'Rio de Janeiro - RJ'
  }
];