import React from 'react';
import { Clock, MapPin, Star, Waves, Sun, Moon, Anchor, BookOpen, Users, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DivingSection: React.FC = () => {
  const { t } = useLanguage();

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

  const divingPrograms = [
    {
      id: 'full-day',
      title: 'Full Day Trips',
      price: '€48',
      duration: '8:30 AM - 4:00 PM',
      icon: <Waves className="h-8 w-8" />,
      description: 'Comfortable and luxurious dive boats departing from our private marina. Choose between 2 dives or join our half-day trips.',
      features: ['2 Dives', 'Luxury Boat', 'Professional Guide', 'Equipment Included'],
      color: 'from-blue-500 to-cyan-500',
      image: '/images/activities/activity-01.jpg'
    },
    {
      id: 'half-day',
      title: 'Half Day Trips',
      price: '€35',
      duration: 'Morning: 9:30-12:30 | Afternoon: 1:30-4:30',
      icon: <Sun className="h-8 w-8" />,
      description: 'Perfect for those who want great dives without spending all day on board!',
      features: ['1 Dive', 'Flexible Timing', 'Hurghada Reefs', 'Quick Return'],
      color: 'from-orange-500 to-yellow-500',
      image: '/images/activities/activity-02.jpg'
    },
    {
      id: 'sunset',
      title: 'Sunset Diving',
      price: '€35',
      duration: '3:00 PM - 5:00 PM (Seasonal)',
      icon: <Sun className="h-8 w-8" />,
      description: 'Experience the Red Sea at its most beautiful with sunset dives. Empty dive spots and golden to red sunlight.',
      features: ['Golden Hour', 'Empty Spots', 'Calm Waters', 'Photography'],
      color: 'from-purple-500 to-pink-500',
      image: '/images/activities/activity-03.jpg'
    },
    {
      id: 'night',
      title: 'Night Diving',
      price: '€35',
      duration: 'Evening',
      icon: <Moon className="h-8 w-8" />,
      description: 'Discover a completely different underwater world! Watch fish sleep and corals feed at night.',
      features: ['Underwater Torch', 'Night Feeding', 'Different Colors', 'Expert Guide'],
      color: 'from-indigo-500 to-purple-500',
      image: '/images/activities/activity-04.jpg'
    },
    {
      id: 'wreck',
      title: 'Wreck Diving',
      price: '€220',
      duration: 'Early Morning - 4:00 PM',
      icon: <Anchor className="h-8 w-8" />,
      description: 'Explore beautiful wrecks including El Mina, Balena, Abu Nuhas, and Salem Express.',
      features: ['3 Dives', 'Dolphin Encounters', 'Historic Wrecks', 'Full Day'],
      color: 'from-gray-600 to-gray-800',
      image: '/images/activities/activity-05.jpg'
    }
  ];

  const courses = [
    { name: 'Scuba Diving Course', price: '€205', level: 'Beginner' },
    { name: 'Open Water Diver', price: '€305', level: 'Beginner' },
    { name: 'Advanced Open Water', price: '€225', level: 'Intermediate' },
    { name: 'Rescue Diver', price: '€350', level: 'Advanced' },
    { name: 'Divemaster', price: '€785', level: 'Professional' }
  ];

  const introDives = [
    { name: 'Pool Intro', price: '€28', description: 'Safe introduction in controlled environment' },
    { name: 'Shore Intro', price: '€39', description: 'First real dive from the shore' },
    { name: 'Boat Intro (1 dive)', price: '€50', description: 'Single dive from our dive boat' },
    { name: 'Boat Intro (2 dives)', price: '€75', description: 'Two dives for complete experience' },
    { name: 'Sunset Intro', price: '€50', description: 'Magical sunset diving experience' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
          <Waves className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Professional Diving Experiences
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the underwater world of the Red Sea with our comprehensive diving programs. 
          From full-day trips to specialized courses, we offer everything for divers of all levels.
        </p>
      </div>

      {/* Diving Programs Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Diving Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divingPrograms.map((program) => (
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
                  <div className="text-xs text-gray-600">{program.duration}</div>
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

                {/* Book Button */}
                <button 
                  onClick={() => scrollToContact(program.title)}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Diving Courses</h2>
          <p className="text-lg text-gray-600">Professional certification courses for all skill levels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800">{course.name}</h3>
                <span className="text-2xl font-bold text-blue-600">{course.price}</span>
              </div>
              <div className="flex items-center mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  course.level === 'Advanced' ? 'bg-red-100 text-red-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {course.level}
                </div>
              </div>
              <button 
                onClick={() => scrollToContact(course.name)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Introductory Dives */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Introductory Dives</h2>
          <p className="text-lg text-gray-600">Perfect for first-time divers and beginners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {introDives.map((dive, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-800">{dive.name}</h3>
                <span className="text-xl font-bold text-purple-600">{dive.price}</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{dive.description}</p>
              <button 
                onClick={() => scrollToContact(dive.name)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment & Safety Info */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">What's Included</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Professional PADI-certified guides
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Full diving equipment (12L tanks, weights, weight belt)
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Boat transportation to dive sites
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Safety briefing and instruction
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
                Minimum age: 10 years (with guardian)
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Diving certification required for advanced dives
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Equipment rental available for €20/day
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                Meeting point: Private Marina, directly in front of Dive Club
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing Note */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Pricing Information</h3>
          <p className="text-gray-600">
            All prices include guide, 12L tanks, boat trip, weights & weight belt. 
            Equipment rental available for €20/day. PADI/SSI Manual and certification fees not included.
          </p>
        </div>
      </div>

      {/* Diving Gallery */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Diving Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the stunning underwater world of the Red Sea through our diving experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="/images/diving/12.webp" 
              alt="Red Sea diving experience"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Red Sea Corals</h3>
                <p className="text-sm opacity-90">Vibrant coral formations</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="/images/diving/beautiful-coral-scuba-diver.webp" 
              alt="Scuba diver exploring coral reef"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Underwater Adventure</h3>
                <p className="text-sm opacity-90">Professional diving experience</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="/images/diving/divers-fukui-point-bunaken.jpg" 
              alt="Divers exploring underwater"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Dive Team</h3>
                <p className="text-sm opacity-90">Group diving experience</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="/images/diving/intro-1738601436.jpg" 
              alt="Underwater marine life"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Marine Life</h3>
                <p className="text-sm opacity-90">Rich underwater ecosystem</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="/images/diving/large.jpg" 
              alt="Diving equipment and preparation"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Dive Preparation</h3>
                <p className="text-sm opacity-90">Professional equipment setup</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="/images/diving/scuba-divers-colorful-reef-swim-thru.jpg" 
              alt="Scuba divers swimming through reef"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Reef Exploration</h3>
                <p className="text-sm opacity-90">Swimming through coral formations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivingSection;
