import { useLanguage } from '../contexts/LanguageContext';
import { getActivityTranslations } from '../data/activityTranslations';
import { activities } from '../data/activities';

export const useTranslatedActivities = () => {
  const { language } = useLanguage();
  const translations = getActivityTranslations(language);
  
  return activities.map(activity => {
    const translatedActivity = translations[activity.id];
    if (translatedActivity) {
      return {
        ...activity,
        name: translatedActivity.name,
        shortDescription: translatedActivity.shortDescription,
        fullDescription: translatedActivity.fullDescription,
        duration: translatedActivity.duration,
        included: translatedActivity.included,
        toBring: translatedActivity.toBring,
        meetingPoint: translatedActivity.meetingPoint,
        importantInfo: translatedActivity.importantInfo
      };
    }
    return activity;
  });
};
