'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2, VolumeX } from 'lucide-react';

export default function VideoSplash() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Allow skipping after 2 seconds
    const skipTimer = setTimeout(() => {
      setCanSkip(true);
    }, 2000);

    return () => {
      clearTimeout(skipTimer);
    };
  }, []);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    // Video will loop automatically due to loop attribute
    // Don't hide the splash
  };

  const handleSkip = () => {
    if (canSkip) {
      setIsVisible(false);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById('splash-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            id="splash-video"
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            playsInline
            loop
            onPlay={handleVideoPlay}
            onEnded={handleVideoEnd}
            style={{
              objectFit: 'cover',
            }}
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
        </div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: canSkip ? 1 : 0, y: canSkip ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          onClick={handleSkip}
          disabled={!canSkip}
          className={`absolute top-8 right-8 flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
            canSkip 
              ? 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30 cursor-pointer' 
              : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
          }`}
        >
          <X className="w-4 h-4" />
          <span className="font-medium">Skip</span>
        </motion.button>

        {/* Mute/Unmute Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          onClick={toggleMute}
          className="absolute bottom-8 right-8 flex items-center space-x-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4" />
              <span className="font-medium">Unmute</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4" />
              <span className="font-medium">Mute</span>
            </>
          )}
        </motion.button>

        {/* Loading indicator */}
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
              />
              <p className="text-white text-lg font-medium">Loading...</p>
            </div>
          </motion.div>
        )}

        {/* Branding overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-8 left-8 text-white"
        >
          <h1 className="text-3xl font-bold mb-2">Stealth Translations</h1>
          <p className="text-lg opacity-80">Unlock Global AI Power</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
