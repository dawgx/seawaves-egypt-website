import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Waves } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-ocean-blue" />
              <div>
                <h3 className="text-2xl font-bold">Sea Waves</h3>
                <p className="text-gray-400">Sea Waves</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <p className="text-coral-orange font-semibold">
              {t('footer.experience')}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-4">{t('footer.contactUs')}</h4>
            <div className="space-y-3">
              <a 
                href="tel:+201061111368"
                className="flex items-center text-gray-300 hover:text-ocean-blue transition-colors"
              >
                <Phone className="h-5 w-5 mr-3" />
                +20 106 11 11 368
              </a>
              <a 
                href="mailto:info@seawaves-egypt.com"
                className="flex items-center text-gray-300 hover:text-ocean-blue transition-colors"
              >
                <Mail className="h-5 w-5 mr-3" />
                info@seawaves-egypt.com
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 mt-1" />
                <div>
                  <p>Sea Waves</p>
                  <p>Hurghada, Red Sea</p>
                  <p>Egypt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-ocean-blue transition-colors"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-ocean-blue transition-colors"
              >
                {t('nav.activities')}
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-ocean-blue transition-colors"
              >
                {t('nav.about')}
              </button>
              <button className="block text-gray-300 hover:text-ocean-blue transition-colors text-left">
                {t('footer.privacy')}
              </button>
              <button className="block text-gray-300 hover:text-ocean-blue transition-colors text-left">
                {t('footer.terms')}
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400">{t('footer.followUs')}</span>
              <button 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </button>
              <button 
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </button>
              <a 
                href="https://wa.me/201061111368" 
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; {currentYear} Sea Waves. {t('footer.rights')}</p>
              <p className="text-sm mt-1">{t('footer.madeWith')}</p>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="bg-gray-800 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold mb-3 text-ocean-blue">{t('footer.readyForAdventure')}</h4>
            <p className="text-gray-300 mb-4">
              {t('footer.contactExpert')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:+201061111368"
                className="bg-coral-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                {t('footer.callNow')}
              </a>
              <a 
                href="mailto:info@seawaves-egypt.com"
                className="bg-ocean-blue hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                {t('footer.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
