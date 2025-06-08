import { useState, useEffect, useRef } from 'react';

const SliderVideo = () => {
  const videoIds = [
    "oOAYBj03KV4",
    "5QufN72yNfM",
    "LRbUp5zk8YI",
    "Dov8GA_wfKE",
    "h96GDO4AjvE"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  const playPreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoIds.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = window.setInterval(playNextVideo, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, videoIds.length]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="min-h-screen text-white animated-background">
      <div className="w-full h-screen flex items-center justify-center relative">
        {/* Video Section */}
        <div
          className="w-full h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoIds[currentVideoIndex]}?autoplay=1&mute=1&enablejsapi=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
            ></iframe>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={playPreviousVideo}
            className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          >
            &#10094; Previous
          </button>
          <button
            onClick={playNextVideo}
            className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          >
            Next &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderVideo;
