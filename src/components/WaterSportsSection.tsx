import React from 'react';
import { Clock, MapPin, Star, Waves, Sun, Users, Shield, Zap, Circle, Square, Anchor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WaterSportsSection: React.FC = () => {
  const { t } = useLanguage();

  const waterSportsPrograms = [
    {
      id: 'parasailing',
      title: 'Parasailing',
      price: '€35 (single) / €60 (double)',
      schedule: 'Everyday (11:00-17:00)',
      icon: <Zap className="h-8 w-8" />,
      description: 'Parasailing has become the most popular water sport activity on the Red Sea coast. It combines the thrills of acceleration and altitude with the scenic views of Hurghada.',
      features: ['No Skills Required', 'Scenic Views', 'Experienced Crew', 'Safety First'],
      color: 'from-blue-500 to-cyan-500',
      note: 'This sport doesn\'t require any skills or training. Just sit back, relax and enjoy your flight. Our friendly and experienced Captain and crew will do all the work to ensure your comfort and safety.'
    },
    {
      id: 'banana-boat',
      title: 'Banana Boat',
      price: '€10',
      schedule: 'Everyday (9:00-16:00)',
      icon: <Circle className="h-8 w-8" />,
      description: 'Take your family or friends to have some fun on the water. Our boat takes up to 8 riders at a time. Banana ride takes about 15-20 minutes.',
      features: ['Up to 8 Riders', '15-20 Minutes', 'Family Fun', 'Life Jackets Included'],
      color: 'from-yellow-500 to-orange-500',
      note: 'Safety is our priority and we do our best to accommodate everyone – all participants wear life jackets. Children under 18 will need a parent or guardian to sign a participation waiver (age 5 and up are welcome to participate).'
    },
    {
      id: 'sofa-boat',
      title: 'Sofa Boat',
      price: '€10',
      schedule: 'Everyday (9:00-16:00)',
      icon: <Square className="h-8 w-8" />,
      description: 'This amazing sofa ride is a must for everybody. This is definitely going to be the craziest sofa you will ever sit on.',
      features: ['Crazy Experience', 'Inflatable Sofa', 'Jet Ski Pulled', 'Safe & Fun'],
      color: 'from-purple-500 to-pink-500',
      note: 'You will be sitting on an inflatable sofa boat and pulled behind the jet skis. This ride is completely safe – all participants wear life jackets.'
    }
  ];

  const speedBoatPrograms = [
    {
      id: 'speed-boats',
      title: 'Speed Boats',
      price: '€40 per person (minimum 3pax)',
      schedule: 'Everyday from 8:30 till 12:30',
      icon: <Anchor className="h-8 w-8" />,
      description: 'Enjoy our Fast Boats and explore the Beauty of the Red Sea. Book now and have a wonderful experience with our trips. Enjoy the crystal clear water of the Red Sea with the maximum speed.',
      features: ['Fast Boats', 'Crystal Clear Water', 'Maximum Speed', 'Private Tours'],
      color: 'from-red-500 to-orange-500',
      note: 'Amazing and action packed adventure. Dolphin Spotting, Snorkeling, Islands, all in one Private Tour is waiting for you! We have 4 boat with different motor speed 140 hp, 200 hp, 250 hp, 500 hp. Boats are selected depending on the number of the people.',
      special: 'Choose One Of Our Popular Tours Or Plan Your Own!'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Water Sports & Speed Boats
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the thrill of the Red Sea with our exciting water sports activities and high-speed boat adventures. 
            From parasailing to speed boats, we have the perfect adventure for everyone!
          </p>
        </div>

        {/* Water Sports Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Water Sports</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get your adrenaline pumping with our exciting water sports activities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {waterSportsPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Header */}
                <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                        <p className="text-sm opacity-90">{program.schedule}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{program.price}</div>
                      <div className="text-sm opacity-90">per person</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special Note */}
                  {program.note && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-blue-800 font-medium">
                        {program.note}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105">
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
        </div>

        {/* Speed Boats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Speed Boats</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the thrill of high-speed adventures on the Red Sea
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {speedBoatPrograms.map((program) => (
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
                      <div className="text-2xl font-bold">{program.price}</div>
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
                          <Star className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special Note */}
                  {program.note && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-red-800 font-medium">
                        {program.note}
                      </p>
                    </div>
                  )}

                  {/* Special Offer */}
                  {program.special && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-orange-800 font-bold text-center">
                        {program.special}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
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
        </div>

        {/* What's Included Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Safety & Equipment</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Professional safety equipment
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Life jackets for all participants
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Experienced and certified instructors
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Safety briefing before each activity
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Emergency procedures and first aid
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Important Information</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Minimum age: 5 years (with guardian)
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Swimming ability recommended
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Bring swimwear, towel, and sunscreen
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Meeting point: Private Marina
              </li>
            </ul>
          </div>
        </div>

        {/* Water Sports Gallery */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Water Sports Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the thrill and excitement of our water sports activities and speed boat adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/water-sports/01d385afd9ae219a54206b5a8d948e409e86d7cdf4b9b92d5ba985a455664df7.avif" 
                alt="Parasailing adventure over the Red Sea"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Parasailing</h3>
                  <p className="text-sm opacity-90">Thrilling aerial adventure</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/water-sports/1635332376water-activities-in-hurghada-06.jpg" 
                alt="Banana boat ride with family and friends"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Banana Boat</h3>
                  <p className="text-sm opacity-90">Fun family activity</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/water-sports/79.jpg" 
                alt="Sofa boat ride experience"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Sofa Boat</h3>
                  <p className="text-sm opacity-90">Crazy sofa experience</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/speed-boats/03.jpg" 
                alt="Speed boat adventure"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Speed Boats</h3>
                  <p className="text-sm opacity-90">High-speed adventures</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/speed-boats/2.jpg" 
                alt="Fast boat trip on crystal clear water"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Crystal Clear Water</h3>
                  <p className="text-sm opacity-90">Maximum speed experience</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/speed-boats/SPEED-BOAT-HURGHADA-4-_5_11zon.jpg" 
                alt="Speed boat with different motor power"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Power Boats</h3>
                  <p className="text-sm opacity-90">140hp to 500hp motors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterSportsSection;
