import React from 'react';
import { Heart, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Founder Story */}
          <div className="bg-gradient-to-r from-ocean-blue/10 to-coral-orange/10 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-6 shadow-lg">
                <img 
                  src="/images/founderimage.jpg" 
                  alt="Ahmed Hassan - Founder of Sea Waves Aqua Center"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{t('about.founder.name')}</h3>
                <p className="text-gray-600">{t('about.founder.title')}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                {t('about.founder.story1')}
              </p>
              
              <p className="mb-4">
                {t('about.founder.story2')}
              </p>
              
              <p className="mb-4">
                {t('about.founder.story3')}
              </p>
              
              <p className="mb-4">
                {t('about.founder.story4')}
              </p>
              
              <p className="font-semibold text-ocean-blue">
                {t('about.founder.story5')}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{t('about.value1.title')}</h4>
              <p className="text-gray-600">
                {t('about.value1.desc')}
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{t('about.value2.title')}</h4>
              <p className="text-gray-600">
                {t('about.value2.desc')}
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-coral-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{t('about.value3.title')}</h4>
              <p className="text-gray-600">
                {t('about.value3.desc')}
              </p>
            </div>
          </div>

          {/* Contact Expert */}
          <div className="mt-12 text-center bg-ocean-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('about.contact.title')}</h3>
            <p className="text-lg mb-6 opacity-90">
              {t('about.contact.desc')}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="mailto:info@seawavesegypt.com"
                className="flex items-center text-lg hover:text-coral-orange transition-colors"
              >
                📧 info@seawavesegypt.com
              </a>
              <a 
                href="tel:+201061111368"
                className="flex items-center text-lg hover:text-coral-orange transition-colors"
              >
                📞 +20 106 11 11 368
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
