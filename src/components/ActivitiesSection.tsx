import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ActivityCard from './ActivityCard';
import { useTranslatedActivities } from '../hooks/useTranslatedActivities';
import { Activity } from '../data/activities';

interface ActivitiesSectionProps {
  onActivitySelect: (activity: Activity) => void;
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ onActivitySelect }) => {
  const { t } = useLanguage();
  const activities = useTranslatedActivities();

  return (
    <section id="activities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 fade-in">
            {t('activities.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
            {t('activities.subtitle')}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={activity.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ActivityCard
                activity={activity}
                onLearnMore={onActivitySelect}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
