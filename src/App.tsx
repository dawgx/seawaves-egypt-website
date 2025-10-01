import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ActivitiesSection from './components/ActivitiesSection';
import ActivityDetail from './components/ActivityDetail';
import Stats from './components/Stats';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Activity } from './data/activities';

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  // Add scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  const handleCloseActivityDetail = () => {
    setSelectedActivity(null);
  };

  return (
    <LanguageProvider>
      <div className="App">
        {/* Header */}
        <Header />

      {/* Hero Section */}
      <Hero />

      {/* Activities Section */}
      <ActivitiesSection onActivitySelect={handleActivitySelect} />

      {/* Stats Section */}
      <Stats />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <ActivityDetail
          activity={selectedActivity}
          isOpen={!!selectedActivity}
          onClose={handleCloseActivityDetail}
        />
      )}
      </div>
    </LanguageProvider>
  );
}

export default App;
