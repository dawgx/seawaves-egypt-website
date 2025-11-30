import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const IntroVideo: React.FC = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if user has seen the intro before (using localStorage)
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro === 'true') {
      setShowVideo(false);
      return;
    }

    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
        // If autoplay is prevented, show play button
      });
    }
  }, []);

  const handleVideoEnd = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setShowVideo(false);
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    localStorage.setItem('hasSeenIntro', 'true');
    setShowVideo(false);
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  if (!showVideo) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 flex items-center gap-2"
        aria-label="Skip intro"
      >
        <X className="h-5 w-5" />
        <span className="text-sm hidden sm:inline">Skip</span>
      </button>

      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          onEnded={handleVideoEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          playsInline
          muted={false}
        >
          <source src="/introduction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay (if video is paused) */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-200"
            aria-label="Play video"
          >
            <div className="bg-white/90 hover:bg-white rounded-full p-6 transition-all duration-200 transform hover:scale-110">
              <svg
                className="w-16 h-16 text-ocean-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default IntroVideo;

