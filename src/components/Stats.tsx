import React from 'react';
import { Award, Users, Shield, Utensils, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Stats: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Utensils,
      number: '9',
      label: t('stats.food'),
      color: 'text-coral-orange'
    },
    {
      icon: Calendar,
      number: '15',
      label: t('stats.experience'),
      color: 'text-ocean-blue'
    },
    {
      icon: Shield,
      number: '20',
      label: t('stats.security'),
      color: 'text-success-green'
    },
    {
      icon: Users,
      number: '45,000',
      label: t('stats.clients'),
      color: 'text-purple-600'
    },
    {
      icon: Award,
      number: '30,000',
      label: t('stats.sails'),
      color: 'text-indigo-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('stats.whyChoose')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-ocean-blue mb-2">
                  <Award className="h-12 w-12 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('stats.guarantee')}</h4>
                <p className="text-gray-600">{t('stats.views')}</p>
              </div>
              
              <div>
                <div className="text-success-green mb-2">
                  <Users className="h-12 w-12 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('stats.provide')}</h4>
                <p className="text-gray-600">{t('stats.experience')}</p>
              </div>
              
              <div>
                <div className="text-coral-orange mb-2">
                  <Utensils className="h-12 w-12 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('stats.serve')}</h4>
                <p className="text-gray-600">{t('stats.food')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
