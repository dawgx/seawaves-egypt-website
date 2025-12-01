import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToActivities = () => {
    const element = document.getElementById('activities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-image.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto md:pt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          {t('hero.title')}
        </h1>
        
        {/* Video Embed */}
        <div className="my-6 fade-in max-w-3xl mx-auto">
          {process.env.REACT_APP_YOUTUBE_VIDEO_ID ? (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src={`https://www.youtube.com/embed/${process.env.REACT_APP_YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${process.env.REACT_APP_YOUTUBE_VIDEO_ID}&controls=1&modestbranding=1&rel=0`}
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : process.env.REACT_APP_VIMEO_VIDEO_ID ? (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src={`https://player.vimeo.com/video/${process.env.REACT_APP_VIMEO_VIDEO_ID}?autoplay=1&muted=1&loop=1&controls=1&background=1`}
                title="Introduction Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              className="w-full h-auto rounded-lg shadow-2xl"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source 
                src={process.env.REACT_APP_VIDEO_URL || "/introduction.mp4"} 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        
        <h2 className="text-3xl md:text-5xl font-light mb-6 fade-in">
          {t('hero.subtitle')}
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 fade-in opacity-90 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        <button
          onClick={scrollToActivities}
          className="bg-coral-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg fade-in mb-16 md:mb-24"
        >
          {t('hero.button')}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center items-center text-white animate-bounce z-10">
        <ChevronDown className="h-8 w-8" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse hidden md:block" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-white/10 rounded-full animate-pulse hidden md:block" />
      <div className="absolute top-1/3 right-8 w-12 h-12 bg-white/10 rounded-full animate-pulse hidden md:block" />
    </section>
  );
};

export default Hero;