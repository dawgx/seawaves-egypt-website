import React, { useMemo } from 'react';
import { Clock, MapPin, Star, Waves, Sun, Users, Shield, Anchor, Fish, Sunset, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BoatTripsSection: React.FC = () => {
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

  const boatPrograms = useMemo(() => [
    {
      id: 'private-trips',
      title: t('boatTrips.private.title'),
      price: 'Contact Us',
      schedule: '8:00 – 15:00',
      icon: <Users className="h-8 w-8" />,
      description: t('boatTrips.private.description'),
      features: [
        t('boatTrips.private.feature1'),
        t('boatTrips.private.feature2'),
        t('boatTrips.private.feature3'),
        t('boatTrips.private.feature4')
      ],
      color: 'from-purple-500 to-pink-500',
      image: '/images/activities/activity-13.jpg',
      note: t('boatTrips.private.note'),
      contact: true
    },
    {
      id: 'fishing',
      title: t('boatTrips.fishing.title'),
      price: 'Contact Us',
      schedule: '10:00-13:00 or 14:00-17:00',
      icon: <Fish className="h-8 w-8" />,
      description: t('boatTrips.fishing.description'),
      features: [
        t('boatTrips.fishing.feature1'),
        t('boatTrips.fishing.feature2'),
        t('boatTrips.fishing.feature3'),
        t('boatTrips.fishing.feature4')
      ],
      color: 'from-blue-500 to-cyan-500',
      image: '/images/activities/activity-14.jpg',
      note: t('boatTrips.fishing.note'),
      contact: true
    },
    {
      id: 'sunset-trip',
      title: t('boatTrips.sunset.title'),
      price: '€30',
      schedule: 'Just in summer season',
      icon: <Sunset className="h-8 w-8" />,
      description: t('boatTrips.sunset.description'),
      features: [
        t('boatTrips.sunset.feature1'),
        t('boatTrips.sunset.feature2'),
        t('boatTrips.sunset.feature3'),
        t('boatTrips.sunset.feature4')
      ],
      color: 'from-orange-500 to-red-500',
      image: '/images/activities/activity-15.jpg',
      note: t('boatTrips.sunset.note')
    },
    {
      id: 'snorkeling',
      title: t('boatTrips.snorkeling.title'),
      price: '€30',
      schedule: '8:00 – 15:00',
      icon: <Waves className="h-8 w-8" />,
      description: t('boatTrips.snorkeling.description'),
      features: [
        t('boatTrips.snorkeling.feature1'),
        t('boatTrips.snorkeling.feature2'),
        t('boatTrips.snorkeling.feature3'),
        t('boatTrips.snorkeling.feature4')
      ],
      color: 'from-teal-500 to-green-500',
      image: '/images/activities/activity-16.jpg',
      note: t('boatTrips.snorkeling.note')
    },
    {
      id: 'glass-boat',
      title: t('boatTrips.glassBoat.title'),
      price: '€25',
      schedule: 'Everyday (10:00-13:00 and 13:00-16:00)',
      icon: <Eye className="h-8 w-8" />,
      description: t('boatTrips.glassBoat.description'),
      features: [
        t('boatTrips.glassBoat.feature1'),
        t('boatTrips.glassBoat.feature2'),
        t('boatTrips.glassBoat.feature3'),
        t('boatTrips.glassBoat.feature4')
      ],
      color: 'from-cyan-500 to-blue-500',
      image: '/images/activities/activity-17.jpg',
      note: t('boatTrips.glassBoat.note')
    }
  ], [t, language]);

  return (
    <div className="py-16 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {t('boatTrips.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('boatTrips.subtitle')}
          </p>
        </div>

        {/* Boat Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {boatPrograms.map((program) => (
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
                  <div className="text-lg font-bold text-gray-800">{program.contact ? 'Contact Us' : program.price}</div>
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
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-cyan-800 font-medium">
                      {program.note}
                    </p>
                  </div>
                )}

                {/* Book Button */}
                <button 
                  onClick={() => scrollToContact(program.title)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                  {program.contact ? t('contact.contactUs') : t('activity.bookNow')}
                </button>
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
