import React, { useMemo } from 'react';
import { Clock, MapPin, Star, Waves, Sun, Users, Shield, Zap, Circle, Square, Anchor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WaterSportsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToContact = (programTitle?: string) => {
    // Store selected program in localStorage if provided
    if (programTitle) {
      localStorage.setItem('selectedProgram', programTitle);
      // Dispatch custom event to notify ContactForm
      window.dispatchEvent(new CustomEvent('programSelected'));
    }
    
    // Check if we're inside a modal (activity detail panel)
    const modalContent = document.getElementById('activity-detail-content');
    const contactFormInModal = document.getElementById('contact-form-modal');
    
    if (modalContent && contactFormInModal) {
      // Scroll within the modal container
      const contactFormTop = contactFormInModal.offsetTop;
      modalContent.scrollTo({
        top: contactFormTop - 20, // Add small offset
        behavior: 'smooth'
      });
    } else {
      // Scroll on main page
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const waterSportsPrograms = useMemo(() => [
    {
      id: 'parasailing',
      title: t('waterSports.parasailing.title'),
      price: '€35 (single) / €60 (double)',
      schedule: 'Everyday (11:00-17:00)',
      icon: <Zap className="h-8 w-8" />,
      description: t('waterSports.parasailing.description'),
      features: [
        t('waterSports.parasailing.feature1'),
        t('waterSports.parasailing.feature2'),
        t('waterSports.parasailing.feature3'),
        t('waterSports.parasailing.feature4')
      ],
      color: 'from-blue-500 to-cyan-500',
      image: '/images/activities/activity-18.jpg',
      note: t('waterSports.parasailing.note')
    },
    {
      id: 'banana-boat',
      title: t('waterSports.banana.title'),
      price: '€15',
      schedule: 'Everyday (9:00-16:00)',
      icon: <Circle className="h-8 w-8" />,
      description: t('waterSports.banana.description'),
      features: [
        t('waterSports.banana.feature1'),
        t('waterSports.banana.feature2'),
        t('waterSports.banana.feature3'),
        t('waterSports.banana.feature4')
      ],
      color: 'from-yellow-500 to-orange-500',
      image: '/images/activities/activity-19.jpg',
      note: t('waterSports.banana.note')
    },
    {
      id: 'sofa-boat',
      title: t('waterSports.sofa.title'),
      price: '€15',
      schedule: 'Everyday (9:00-16:00)',
      icon: <Square className="h-8 w-8" />,
      description: t('waterSports.sofa.description'),
      features: [
        t('waterSports.sofa.feature1'),
        t('waterSports.sofa.feature2'),
        t('waterSports.sofa.feature3'),
        t('waterSports.sofa.feature4')
      ],
      color: 'from-purple-500 to-pink-500',
      image: '/images/activities/activity-20.jpg',
      note: t('waterSports.sofa.note')
    }
  ], [t, language]);

  const speedBoatPrograms = useMemo(() => [
    {
      id: 'speed-boats',
      title: t('waterSports.speedBoats.title'),
      price: '€60 per person (minimum 3pax)',
      schedule: 'Everyday from 8:30 till 12:30',
      icon: <Anchor className="h-8 w-8" />,
      description: t('waterSports.speedBoats.description'),
      features: [
        t('waterSports.speedBoats.feature1'),
        t('waterSports.speedBoats.feature2'),
        t('waterSports.speedBoats.feature3'),
        t('waterSports.speedBoats.feature4')
      ],
      color: 'from-red-500 to-orange-500',
      image: '/images/activities/activity-21.jpg',
      note: t('waterSports.speedBoats.note'),
      special: t('waterSports.speedBoats.special')
    }
  ], [t, language]);

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {t('waterSports.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('waterSports.subtitle')}
          </p>
        </div>

        {/* Water Sports Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('waterSports.sectionTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('waterSports.sectionSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {waterSportsPrograms.map((program) => (
              <div key={program.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="text-sm font-bold text-gray-800 leading-tight">{program.price}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{program.schedule}</p>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Special Note */}
                  {program.note && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-blue-800 font-medium">
                        {program.note}
                      </p>
                    </div>
                  )}

                  {/* Book Button */}
                  <button 
                    onClick={() => scrollToContact(program.title)}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                  >
                    {t('activity.bookNow')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speed Boats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('waterSports.speedBoats.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the thrill of high-speed adventures on the Red Sea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {speedBoatPrograms.map((program) => (
              <div key={program.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="text-sm font-bold text-gray-800 leading-tight">{program.price}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{program.schedule}</p>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
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

                  {/* Book Button */}
                  <button 
                    onClick={() => scrollToContact(program.title)}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
                  >
                    {t('activity.bookNow')}
                  </button>
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
