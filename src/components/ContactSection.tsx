import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 fade-in">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ContactForm activityName="General Inquiry" showDateAndPeople={false} />
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="text-center">
            <div className="bg-ocean-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('contact.phoneTitle')}</h3>
            <p className="text-gray-600 mb-2">+20 106 111 1368</p>
            <p className="text-sm text-gray-500">{t('contact.phoneDesc')}</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="bg-coral-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-coral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('contact.emailTitle')}</h3>
            <p className="text-gray-600 mb-2">info@seawavesegypt.com</p>
            <p className="text-sm text-gray-500">{t('contact.emailDesc')}</p>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="bg-success-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('contact.locationTitle')}</h3>
            <p className="text-gray-600 mb-2">Hurghada, Egypt</p>
            <p className="text-sm text-gray-500">{t('contact.locationDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
