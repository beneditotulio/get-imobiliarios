import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import './i18n/config';
import { SearchBar } from './components/SearchBar';
import { PropertyCard } from './components/PropertyCard';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-extrabold text-blue-900 hover:text-blue-700 transition-colors duration-300">{t('welcome')}</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center rounded-full bg-blue-50 p-2.5 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 ease-in-out">
                  <span className="sr-only">{t('language')}</span>
                  <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => changeLanguage('pt')}
                          className={`${active ? 'bg-blue-50 text-blue-900' : 'text-gray-700'} flex w-full items-center px-4 py-3 text-sm font-medium transition-colors duration-150 ease-in-out`}
                        >
                          🇧🇷 Português
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => changeLanguage('en')}
                          className={`${active ? 'bg-blue-50 text-blue-900' : 'text-gray-700'} flex w-full items-center px-4 py-3 text-sm font-medium transition-colors duration-150 ease-in-out`}
                        >
                          🇺🇸 English
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('find_your_dream_property')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('discover_perfect_place')}
            </p>
          </div>

          <SearchBar onSearch={(filters) => console.log(filters)} />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example property cards */}
            <PropertyCard
              property={{
                id: 1,
                title: "Luxury Beachfront Villa",
                description: "Stunning 4-bedroom villa with panoramic ocean views",
                price: 1200000,
                location: "Miami Beach, FL",
                bedrooms: 4,
                bathrooms: 3,
                area: 350,
                images: ["/sample-property-1.jpg"]
              }}
            />
            {/* Add more PropertyCard components as needed */}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Get Imobiliários. {t('all_rights_reserved')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;