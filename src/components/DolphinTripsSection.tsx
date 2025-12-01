import React, { useMemo } from 'react';
import { Clock, MapPin, Star, Waves, Sun, Users, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DolphinTripsSection: React.FC = () => {
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

  const dolphinPrograms = useMemo(() => [
    {
      id: 'regular-dolphin',
      title: t('dolphin.regular.title'),
      price: '€45',
      schedule: 'Everyday',
      icon: <Heart className="h-8 w-8" />,
      description: t('dolphin.regular.description'),
      features: [
        t('dolphin.regular.feature1'),
        t('dolphin.regular.feature2'),
        t('dolphin.regular.feature3'),
        t('dolphin.regular.feature4')
      ],
      color: 'from-blue-500 to-cyan-500',
      image: '/images/activities/activity-22.jpg',
      note: t('dolphin.regular.note')
    },
    {
      id: 'vip-dolphin',
      title: t('dolphin.vip.title'),
      price: '€60',
      schedule: 'Monday – Thursday',
      icon: <Star className="h-8 w-8" />,
      description: t('dolphin.vip.description'),
      features: [
        t('dolphin.vip.feature1'),
        t('dolphin.vip.feature2'),
        t('dolphin.vip.feature3'),
        t('dolphin.vip.feature4')
      ],
      color: 'from-purple-500 to-pink-500',
      image: '/images/activities/activity-23.jpg',
      note: t('dolphin.vip.note')
    }
  ], [t, language]);

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {t('dolphin.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('dolphin.subtitle')}
          </p>
        </div>

        {/* Dolphin Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {dolphinPrograms.map((program) => (
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
                  <div className="text-lg font-bold text-gray-800">{program.price}</div>
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

        {/* What's Included Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">What's Included</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Professional boat transportation
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Snorkeling equipment
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Delicious lunch on board
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Professional guide and safety briefing
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Sunbathing deck and relaxation areas
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
                Bring sunscreen and hat
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Meeting point: Private Marina
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Dolphin Encounter Information</h3>
            <p className="text-gray-600">
              Our dolphin trips offer the best chance to see these magnificent creatures in their natural habitat. 
              While we cannot guarantee 100% dolphin sightings, our experienced guides know the best locations and times to maximize your chances.
            </p>
          </div>
        </div>

        {/* Dolphin Gallery */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dolphin Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the joy of swimming with dolphins and witness their playful nature in the Red Sea
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/dolphin-trips/0+_DSC4970+1x.webp" 
                alt="Dolphins swimming in the Red Sea"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Dolphin Encounters</h3>
                  <p className="text-sm opacity-90">Swimming with wild dolphins</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/dolphin-trips/common-bottlenose-dolphin-tursiops-truncatus-600nw-2462528295.webp" 
                alt="Bottlenose dolphins in their natural habitat"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Natural Habitat</h3>
                  <p className="text-sm opacity-90">Dolphins in the wild</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/dolphin-trips/Dolphin-QuestWaikoloa-1.webp" 
                alt="Dolphin interaction experience"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Interactive Experience</h3>
                  <p className="text-sm opacity-90">Close encounters with dolphins</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/dolphin-trips/images.jpg" 
                alt="Dolphin boat trip experience"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Boat Experience</h3>
                  <p className="text-sm opacity-90">Comfortable boat trips</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/dolphin-trips/swimgwithdolphinsbyisraelministry-1280x640.webp" 
                alt="Swimming with dolphins underwater"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Underwater Magic</h3>
                  <p className="text-sm opacity-90">Swimming alongside dolphins</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/dolphin-trips/Underwater-Pod-08824_copyright-Dolphin-Safari.webp" 
                alt="Dolphin pod swimming together"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Dolphin Pods</h3>
                  <p className="text-sm opacity-90">Family groups swimming together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DolphinTripsSection;
