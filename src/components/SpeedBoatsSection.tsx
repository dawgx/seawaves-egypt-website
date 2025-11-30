import React, { useEffect, useState } from 'react';
import { Clock, MapPin, Star, Waves, Sun, Users, Shield, Zap, Anchor, Fish } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SpeedBoatsSection: React.FC = () => {
  const { t } = useLanguage();
  const [isInModal, setIsInModal] = useState(false);
  
  // Check if we're in a modal context
  useEffect(() => {
    const checkModal = () => {
      setIsInModal(document.getElementById('activity-detail-content') !== null);
    };
    checkModal();
    // Check again after a short delay to ensure DOM is ready
    const timeout = setTimeout(checkModal, 100);
    return () => clearTimeout(timeout);
  }, []);

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

  const speedBoatPrograms = [
    {
      id: 'speed-boats',
      title: 'Speed Boats',
      price: '€60 per person (min 3 people)',
      schedule: 'Everyday from 8:30 till 12:30',
      icon: <Zap className="h-8 w-8" />,
      description: 'Enjoy our Fast Boats and explore the Beauty of the Red Sea. Book now and have a wonderful experience with our trips. Enjoy the crystal clear water of the Red Sea with the maximum speed.',
      features: ['Fast Boats', 'Crystal Clear Water', 'Maximum Speed', 'Private Tours'],
      color: 'from-red-500 to-orange-500',
      note: 'Amazing and action packed adventure. Dolphin Spotting, Snorkeling, Islands, all in one Private Tour is waiting for you! We have 4 boats with different motor speeds: 140 hp, 200 hp, 250 hp, 500 hp. Boats are selected depending on the number of people.',
      special: 'Choose One Of Our Popular Tours Or Plan Your Own!'
    }
  ];

  const boatTypes = [
    {
      power: '140 HP',
      capacity: '3-6 people',
      description: 'Perfect for small groups and intimate experiences'
    },
    {
      power: '200 HP',
      capacity: '6-10 people',
      description: 'Ideal for medium groups and family trips'
    },
    {
      power: '250 HP',
      capacity: '10-15 people',
      description: 'Great for larger groups and corporate events'
    },
    {
      power: '500 HP',
      capacity: '15+ people',
      description: 'Maximum power for the ultimate speed experience'
    }
  ];

  return (
    <div className={`${isInModal ? 'pt-4' : 'pt-8'} pb-16 bg-gradient-to-b from-red-50 to-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Hide when in modal */}
        {!isInModal && (
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Speed Boats
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the ultimate thrill with our high-speed boat adventures! 
            Explore the Red Sea at maximum speed with crystal clear waters and unforgettable experiences.
          </p>
        </div>
        )}

        {/* Speed Boat Program */}
        <div className={`flex justify-center ${isInModal ? 'mb-8' : 'mb-16'}`}>
          <div className="w-full max-w-md">
          {speedBoatPrograms.map((program) => (
            <div key={program.id} className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${isInModal ? 'mt-0' : 'mt-4'}`}>
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${program.color} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 text-white">
                  {program.icon}
                </div>
                <div className="absolute bottom-4 left-4 text-white pr-16">
                  <div className="text-3xl font-bold">{program.price}</div>
                  <div className="text-sm opacity-90">{program.schedule}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
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
                    Book Now
                  </button>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Boat Types Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Speed Boat Fleet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have 4 boats with different motor speeds to accommodate groups of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boatTypes.map((boat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{boat.power}</h3>
                  <p className="text-sm text-gray-600 mb-3">{boat.capacity}</p>
                  <p className="text-sm text-gray-500">{boat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">What's Included</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                High-speed boat transportation
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                Professional captain and crew
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                Safety equipment and life jackets
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                Dolphin spotting opportunities
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                Snorkeling equipment (if needed)
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Important Information</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                Minimum 3 people required
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                Maximum speed experience
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                Bring sunscreen and hat
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                Meeting point: Private Marina
              </li>
            </ul>
          </div>
        </div>

        {/* Speed Boats Gallery */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Speed Boats Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the thrill of high-speed adventures on the crystal clear waters of the Red Sea
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/speed-boats/03.jpg" 
                alt="High-speed boat adventure"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Speed Adventure</h3>
                  <p className="text-sm opacity-90">Maximum speed experience</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/speed-boats/2.jpg" 
                alt="Fast boat on crystal clear water"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Crystal Clear Water</h3>
                  <p className="text-sm opacity-90">Beautiful Red Sea waters</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/speed-boats/201821142043159.jpg" 
                alt="Speed boat with powerful motor"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Power Boats</h3>
                  <p className="text-sm opacity-90">140hp to 500hp motors</p>
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
                  <h3 className="font-semibold">Fleet Variety</h3>
                  <p className="text-sm opacity-90">Different sizes for all groups</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/speed-boats/Speed-Boat-Hurghada-Dream-5-870x555.jpg" 
                alt="Speed boat dream experience"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Dream Experience</h3>
                  <p className="text-sm opacity-90">Unforgettable speed adventure</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/speed-boats/caption.jpg" 
                alt="Speed boat action and adventure"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Action Packed</h3>
                  <p className="text-sm opacity-90">Thrilling speed experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedBoatsSection;
