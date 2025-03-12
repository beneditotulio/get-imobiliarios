import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HomeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { BedIcon, BathIcon, RulerIcon } from './icons';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    description: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    images: string[];
  };
}

export const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  const { t } = useTranslation();

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={property.images[0] || '/placeholder-property.jpg'}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {property.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">{property.description}</p>
        </div>
        <div className="mb-6 flex items-center space-x-2">
          <MapPinIcon className="h-5 w-5 text-blue-500" />
          <span className="text-sm text-gray-600">{property.location}</span>
        </div>
        <div className="mb-6 grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <BedIcon className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm text-gray-600">{property.bedrooms} {t('bedrooms')}</span>
          </div>
          <div className="flex flex-col items-center">
            <BathIcon className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm text-gray-600">{property.bathrooms} {t('bathrooms')}</span>
          </div>
          <div className="flex flex-col items-center">
            <RulerIcon className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm text-gray-600">{property.area}m²</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700">
            {t('view_details')}
          </button>
        </div>
      </div>
    </div>
  );
};