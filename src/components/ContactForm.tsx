import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  numberOfPeople: string;
  message: string;
  activityName: string;
}

interface ContactFormProps {
  activityName: string;
  showDateAndPeople?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ activityName, showDateAndPeople = true }) => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    defaultValues: {
      activityName
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Send to backend API
    const apiUrl = process.env.REACT_APP_API_URL || 'https://seawaves-egypt-website-1.onrender.com';
    
    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('API URL:', apiUrl);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        {t('contact.interestedIn')} {activityName}? {t('contact.contactUs')}!
      </h3>
      <p className="text-gray-600 mb-6">
        {t('contact.formDescription')}
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success-green/10 border border-success-green/20 rounded-lg flex items-center">
          <CheckCircle className="h-5 w-5 text-success-green mr-3" />
          <p className="text-success-green font-medium">
            {t('contact.thankYou')}
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-error-red/10 border border-error-red/20 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 text-error-red mr-3" />
          <p className="text-error-red font-medium">
            {t('contact.errorMessage')}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.fullName')} *
          </label>
          <input
            type="text"
            id="fullName"
            {...register('fullName', { required: t('contact.fullName') + ' is required' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors ${
              errors.fullName ? 'border-error-red' : 'border-gray-300'
            }`}
            placeholder={t('contact.fullName')}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-error-red">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.email')} *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: t('contact.email') + ' is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors ${
              errors.email ? 'border-error-red' : 'border-gray-300'
            }`}
            placeholder={t('contact.email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error-red">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.phone')} *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: t('contact.phone') + ' is required' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors ${
              errors.phone ? 'border-error-red' : 'border-gray-300'
            }`}
            placeholder={t('contact.phone')}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-error-red">{errors.phone.message}</p>
          )}
        </div>

        {/* Preferred Date and Number of People - Only show if showDateAndPeople is true */}
        {showDateAndPeople && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.preferredDate')}
              </label>
              <input
                type="date"
                id="preferredDate"
                {...register('preferredDate')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.numberOfPeople')}
              </label>
              <select
                id="numberOfPeople"
                {...register('numberOfPeople')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors"
              >
                <option value="1">{t('contact.people1')}</option>
                <option value="2">{t('contact.people2')}</option>
                <option value="3">{t('contact.people3')}</option>
                <option value="4">{t('contact.people4')}</option>
                <option value="5+">{t('contact.people5plus')}</option>
              </select>
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors resize-vertical"
            placeholder={t('contact.message')}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-coral-orange hover:bg-orange-600 transform hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              {t('contact.sending')}...
            </>
          ) : (
            <>
              {t('contact.sendInquiry')}
              <Send className="h-5 w-5 ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
