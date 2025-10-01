import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Activity } from '../data/activities';
import { useLanguage } from '../contexts/LanguageContext';

interface ActivityCardProps {
  activity: Activity;
  onLearnMore: (activity: Activity) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onLearnMore }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={activity.images[0]}
          alt={activity.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{activity.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4 line-clamp-2">
          {activity.shortDescription}
        </p>

        {/* Duration */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-2" />
          <span>{activity.duration}</span>
        </div>

        {/* Learn More Button */}
        <button
          onClick={() => onLearnMore(activity)}
          className="w-full bg-ocean-blue hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group mt-auto"
        >
          {t('activity.learnMore')}
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
