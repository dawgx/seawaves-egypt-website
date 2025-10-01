import React from 'react';
import { Clock, MapPin, Star, Waves, Sun, Users, Shield, Anchor, Fish, Sunset, Eye, Submarine } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BoatTripsSection: React.FC = () => {
  const { t } = useLanguage();

  const boatPrograms = [
    {
      id: 'private-trips',
      title: 'Private Trips',
      price: 'Contact Us',
      schedule: '8:00 – 15:00',
      icon: <Users className="h-8 w-8" />,
      description: 'Our company offers various boats for private charters to cater for small or big groups. The most popular are the boat charters for families who want to have a day at sea where they can enjoy the sea without being with the crowds!',
      features: ['Private Charter', 'Family Groups', 'Special Events', 'Customized Service'],
      color: 'from-purple-500 to-pink-500',
      note: 'We can also arrange on request Birthday Parties, Bachelor parties, Wedding Parties, Staff Parties etc… during the day or night. Tell us what you need and we are here to please you.',
      contact: true
    },
    {
      id: 'fishing',
      title: 'Fishing',
      price: 'Contact Us',
      schedule: '10:00-13:00 or 14:00-17:00',
      icon: <Fish className="h-8 w-8" />,
      description: 'Do you like fishing? Don\'t miss this amazing excursion. You will fish in the open sea and in case of catching an eatable fish, our chief will prepare it on the boat for you.',
      features: ['Open Sea Fishing', 'Fresh Fish Cooking', 'Fully Equipped Boat', 'Lunch & Drinks'],
      color: 'from-blue-500 to-cyan-500',
      note: 'If you are not in the mood to fish, you can just take a sunbath on the deck or go for snorkeling. The boat is fully equipped for fishing.',
      contact: true
    },
    {
      id: 'sunset-trip',
      title: 'Sunset Trip',
      price: '€30',
      schedule: 'Just in summer season',
      icon: <Sunset className="h-8 w-8" />,
      description: 'This trip is a unique end of the day spent on the Red Sea! Enjoy watching the beautiful sunset from a comfortable boat and make the unforgettable memories.',
      features: ['Sunset Views', 'Comfortable Boat', 'Unforgettable Memories', 'Summer Season'],
      color: 'from-orange-500 to-red-500',
      note: 'Perfect for romantic evenings and special moments on the Red Sea.'
    },
    {
      id: 'snorkeling',
      title: 'Snorkeling',
      price: '€30',
      schedule: '8:00 – 15:00',
      icon: <Waves className="h-8 w-8" />,
      description: 'Exploring with us the underwater world of the Red Sea. This snorkeling trip will take you to the spectacular sites where you can choose to jump into the water or simply lay on the deck and work on your tan.',
      features: ['Underwater Exploration', 'Snorkeling Equipment', 'Hotel Pickup', 'Lunch & Drinks'],
      color: 'from-teal-500 to-green-500',
      note: 'There is snorkeling equipment onboard for your use if required. Hotel pickup and drop off is available from most Hurghada hotels.'
    },
    {
      id: 'submarine',
      title: 'Submarine Trip',
      price: '€40',
      schedule: 'Everyday (9:00-13:00)',
      icon: <Submarine className="h-8 w-8" />,
      description: 'In a submarine boat you will enjoy watching all kinds of Red Sea marine life: beautiful coral reefs, colorful fish and descend to depths of up to 22 meters.',
      features: ['22m Depth', 'Marine Life Viewing', 'Coral Reefs', 'Underwater Adventure'],
      color: 'from-indigo-500 to-purple-500',
      note: 'Experience the underwater world without getting wet!'
    },
    {
      id: 'glass-boat',
      title: 'Glass Boat',
      price: '€20',
      schedule: 'Everyday (10:00-13:00 and 13:00-16:00)',
      icon: <Eye className="h-8 w-8" />,
      description: 'Watch the wonderful coral reefs and variety of the colorful fish during this three hours trip. Admire the beautiful views will all your family or friends without need of jumping to the water.',
      features: ['3 Hours Trip', 'Glass Bottom View', 'Family Friendly', 'No Swimming Required'],
      color: 'from-cyan-500 to-blue-500',
      note: 'Perfect for families with children and those who prefer to stay dry while enjoying the underwater world.'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Boat Trips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the Red Sea from the comfort of our boats! From private charters to fishing adventures, 
            sunset cruises to underwater exploration - we have the perfect boat trip for everyone.
          </p>
        </div>

        {/* Boat Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {boatPrograms.map((program) => (
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
                    <div className="text-2xl font-bold">{program.price}</div>
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
                        <Star className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Note */}
                {program.note && (
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-cyan-800 font-medium">
                      {program.note}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105">
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
              <Shield className="h-6 w-6 text-cyan-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">What's Included</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-cyan-500 mr-2" />
                Professional boat transportation
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-cyan-500 mr-2" />
                Safety equipment and life jackets
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-cyan-500 mr-2" />
                Professional guide and crew
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-cyan-500 mr-2" />
                Lunch and drinks (where specified)
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-cyan-500 mr-2" />
                Hotel pickup (where available)
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-cyan-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Important Information</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-cyan-500 mr-2" />
                Minimum age: 3 years (with guardian)
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-cyan-500 mr-2" />
                Swimming ability recommended for water activities
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-cyan-500 mr-2" />
                Bring sunscreen, hat, and towel
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-cyan-500 mr-2" />
                Meeting point: Private Marina
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 mb-16">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Custom Boat Trips</h3>
            <p className="text-gray-600 mb-4">
              For private charters, fishing trips, and special events, please contact us to discuss your specific needs and requirements.
            </p>
            <p className="text-gray-700 font-medium">
              To make a reservation, please contact us. Write what kind of services you are interested in.
            </p>
          </div>
        </div>

        {/* Boat Gallery */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Boat Trips Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the Red Sea from our comfortable boats with various activities and stunning views
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/boat-trips/602f36_171baf9b8d634445b107cf1f0483c098~mv2.avif" 
                alt="Luxury boat trip experience"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Luxury Boats</h3>
                  <p className="text-sm opacity-90">Comfortable and luxurious</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/boat-trips/92e6991d-881d-49f1-b72c-66fb1223f52c_experience-the-ultimate-full-day-boat-trip-in-hurghada-xlarge.webp" 
                alt="Full day boat trip adventure"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Full Day Adventures</h3>
                  <p className="text-sm opacity-90">Ultimate boat trip experience</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/boat-trips/hnCTnWMSyFw-Copy-860x420.jpg" 
                alt="Boat deck with sunbathing area"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Sunbathing Deck</h3>
                  <p className="text-sm opacity-90">Relax and enjoy the sun</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/boat-trips/mahmya-island.jpg" 
                alt="Island destination boat trip"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Island Destinations</h3>
                  <p className="text-sm opacity-90">Beautiful island stops</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/boat-trips/WhatsAppImage2024-08-08at2.56.06PM-287668.webp" 
                alt="Boat trip group experience"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Group Experiences</h3>
                  <p className="text-sm opacity-90">Fun with friends and family</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/boat-trips/images.jpg" 
                alt="Boat trip activities and entertainment"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Boat Activities</h3>
                  <p className="text-sm opacity-90">Various activities on board</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatTripsSection;
