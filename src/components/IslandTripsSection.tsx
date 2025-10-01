import React from 'react';
import { Clock, MapPin, Star, Waves, Sun, Users, Shield, Island, Anchor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const IslandTripsSection: React.FC = () => {
  const { t } = useLanguage();

  const islandPrograms = [
    {
      id: 'orange-bay',
      title: 'Orange Bay Island',
      price: '€40',
      schedule: '8:00 – 15:00 Private side (with shade) – Everyday',
      icon: <Island className="h-8 w-8" />,
      description: 'You will experience the flair of Caribbean beach. Relaxation at one of the most fantastic island in the Red Sea and 2 coral reef stops where you can experience the beauty of the underwater world.',
      features: ['Caribbean Beach Feel', '2 Coral Reef Stops', 'Equipment Included', 'Lunch & Drinks'],
      color: 'from-orange-500 to-yellow-500',
      note: 'Let yourself be enchanted and enjoy a wonderful day with us. Price includes equipment, lunch and drinks.'
    },
    {
      id: 'vip-orange-bay',
      title: 'VIP Orange Bay Island',
      price: '€50',
      schedule: '7:00 – 15:00 Private side (with shade) – Saturday – Tuesday',
      icon: <Star className="h-8 w-8" />,
      description: 'You will experience the flair of Caribbean beach. Relaxation at one of the most fantastic island in the Red Sea and 2 coral reef stops where you can experience the beauty of the underwater world.',
      features: ['Early Start (7:00)', 'VIP Experience', '2 Coral Reef Stops', 'Premium Service'],
      color: 'from-purple-500 to-pink-500',
      note: 'Let yourself be enchanted and enjoy a wonderful day with us. Price includes equipment, lunch and drinks.'
    },
    {
      id: 'giftun-island',
      title: 'Giftun Island',
      price: '€35',
      schedule: '8:00 – 16:00 Private side (without shade) – Everyday',
      icon: <Waves className="h-8 w-8" />,
      description: 'Feel Caribbean vibes and snorkel at one of the most wonderful island in the Red Sea. We are going to 2 more coral stops where you can experience the colors of the corals and fishes and the underwater world.',
      features: ['Caribbean Vibes', '2 Coral Stops', 'Snorkeling Experience', 'Full Day Trip'],
      color: 'from-blue-500 to-cyan-500',
      note: 'Let yourself be enchanted and enjoy a wonderful day with us. Including equipment, lunch and drinks.'
    },
    {
      id: 'super-giftun',
      title: 'Super Giftun Island',
      price: '€40',
      schedule: '8:00 – 16:00 Private side (without shade) – Sunday – Wednesday',
      icon: <Anchor className="h-8 w-8" />,
      description: 'Feel Caribbean vibes and snorkel at one of the most wonderful island in the Red Sea. We are going to 2 more coral stops where you can experience the colors of the corals and fishes and the underwater world.',
      features: ['Water Sports Included', '2 Coral Stops', 'Caribbean Vibes', 'Enhanced Experience'],
      color: 'from-green-500 to-teal-500',
      note: 'This trip have also water sport in the offer. Including equipment, lunch and drinks.'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Island Trips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the Caribbean flair in the Red Sea! Discover beautiful islands, 
            pristine beaches, and vibrant coral reefs on our unforgettable island adventures.
          </p>
        </div>

        {/* Island Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {islandPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Header */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="mr-4">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{program.title}</h3>
                      <p className="text-sm opacity-90">{program.schedule}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{program.price}</div>
                    <div className="text-sm opacity-90">per person</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Note */}
                {program.note && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-green-800 font-medium">
                      {program.note}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105">
                    BOOK NOW
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                    GALLERY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">What's Included</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-green-500 mr-2" />
                Professional boat transportation
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-green-500 mr-2" />
                Snorkeling equipment
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-green-500 mr-2" />
                Delicious lunch and drinks
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-green-500 mr-2" />
                Professional guide and safety briefing
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-green-500 mr-2" />
                Beach relaxation and sunbathing
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Important Information</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-green-500 mr-2" />
                Minimum age: 3 years (with guardian)
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-green-500 mr-2" />
                Swimming ability recommended
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-green-500 mr-2" />
                Bring sunscreen, hat, and towel
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-green-500 mr-2" />
                Meeting point: Private Marina
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Island Experience Information</h3>
            <p className="text-gray-600">
              Our island trips offer the perfect blend of relaxation and adventure. Experience Caribbean vibes 
              in the Red Sea with pristine beaches, crystal-clear waters, and vibrant coral reefs. 
              All trips include equipment, lunch, and drinks.
            </p>
          </div>
        </div>

        {/* Island Gallery */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Island Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the beauty of Red Sea islands with pristine beaches, crystal-clear waters, and vibrant coral reefs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/island-tour/0c.jpg" 
                alt="Beautiful island beach with crystal clear water"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Pristine Beaches</h3>
                  <p className="text-sm opacity-90">Crystal clear waters</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/island-tour/5b.jpg" 
                alt="Island paradise with tropical vibes"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Tropical Paradise</h3>
                  <p className="text-sm opacity-90">Caribbean vibes in Red Sea</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/island-tour/99.jpg" 
                alt="Island boat trip experience"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Boat Adventures</h3>
                  <p className="text-sm opacity-90">Comfortable boat trips</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/island-tour/d5.jpg" 
                alt="Snorkeling and coral reef exploration"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Coral Reefs</h3>
                  <p className="text-sm opacity-90">Vibrant underwater world</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/island-tour/da.jpg" 
                alt="Island relaxation and sunbathing"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Beach Relaxation</h3>
                  <p className="text-sm opacity-90">Perfect for sunbathing</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/island-tour/el8lmmqhhlklotkzels2.jpg" 
                alt="Island tour group experience"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Group Experience</h3>
                  <p className="text-sm opacity-90">Fun with friends and family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslandTripsSection;
