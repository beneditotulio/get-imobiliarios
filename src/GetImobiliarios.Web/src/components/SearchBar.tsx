import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  query: string;
  priceRange: {
    min: number;
    max: number;
  };
  propertyType: string;
  bedrooms: number;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    priceRange: { min: 0, max: 1000000 },
    propertyType: 'all',
    bedrooms: 0
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('search_placeholder')}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="p-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300"
        >
          {t('search')}
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">{t('price_range')}</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder={t('min')}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={filters.priceRange.min}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: { ...filters.priceRange, min: Number(e.target.value) }
                })}
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder={t('max')}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                value={filters.priceRange.max}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: { ...filters.priceRange, max: Number(e.target.value) }
                })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">{t('property_type')}</label>
            <select
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={filters.propertyType}
              onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
            >
              <option value="all">{t('all_types')}</option>
              <option value="house">{t('house')}</option>
              <option value="apartment">{t('apartment')}</option>
              <option value="condo">{t('condo')}</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">{t('bedrooms')}</label>
            <select
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={filters.bedrooms}
              onChange={(e) => setFilters({ ...filters, bedrooms: Number(e.target.value) })}
            >
              <option value={0}>{t('any')}</option>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
              <option value={3}>3+</option>
              <option value={4}>4+</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};