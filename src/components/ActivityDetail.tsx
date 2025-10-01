import React from 'react';
import { X, Clock, MapPin, AlertTriangle, CheckCircle, Package } from 'lucide-react';
import { Activity } from '../data/activities';
import ImageGallery from './ImageGallery';
import ContactForm from './ContactForm';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslatedActivities } from '../hooks/useTranslatedActivities';

interface ActivityDetailProps {
  activity: Activity;
  isOpen: boolean;
  onClose: () => void;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity, isOpen, onClose }) => {
  const { t } = useLanguage();
  const translatedActivities = useTranslatedActivities();
  const translatedActivity = translatedActivities.find(a => a.id === activity.id) || activity;
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl">
          {/* Header */}
          <div className="relative p-6 border-b border-gray-200">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 pr-12">
              {translatedActivity.name}
            </h1>
            
            <div className="flex items-center mt-4 text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-medium">{translatedActivity.duration}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {/* Image Gallery */}
            <ImageGallery images={activity.images} activityName={translatedActivity.name} />

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('activity.about')}</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {translatedActivity.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* What's Included */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-success-green mr-2" />
                  {t('activity.included')}
                </h3>
                <ul className="space-y-2">
                  {translatedActivity.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-success-green mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Bring */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Package className="h-6 w-6 text-ocean-blue mr-2" />
                  {t('activity.toBring')}
                </h3>
                <ul className="space-y-2">
                  {translatedActivity.toBring.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Package className="h-4 w-4 text-ocean-blue mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meeting Point */}
            {translatedActivity.meetingPoint && (
              <div className="mb-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-coral-orange mr-2" />
                  {t('activity.meetingPoint')}
                </h3>
                <p className="text-gray-700">{translatedActivity.meetingPoint}</p>
              </div>
            )}

            {/* Important Information */}
            <div className="mb-8 bg-yellow-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                {t('activity.importantInfo')}
              </h3>
              <ul className="space-y-2">
                {translatedActivity.importantInfo.map((info, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <ContactForm activityName={translatedActivity.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
