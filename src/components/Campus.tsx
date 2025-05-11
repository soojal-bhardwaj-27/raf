import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const campusImages = [
  "./campus_img.png",
  "./campus_img.png",
  "./campus_img.png",
  "./download.jpg"
];

const videoUrls = [
  "https://www.youtube.com/embed/oOAYBj03KV4",
  "https://www.youtube.com/embed/5QufN72yNfM",
  "https://www.youtube.com/embed/LRbUp5zk8YI",
  "https://www.youtube.com/embed/Dov8GA_wfKE",
  "https://www.youtube.com/embed/h96GDO4AjvE",
];

const Campus = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = () => {
    setVideoIndex((prev) => (prev + 1) % videoUrls.length);
  };

  const prevVideo = () => {
    setVideoIndex((prev) => (prev - 1 + videoUrls.length) % videoUrls.length);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          touchThreshold: 10,
          swipeToSlide: true
        }
      }
    ]
  };

  return (
    <section
      id="campus"
      ref={ref}
      className="py-16 px-4 bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff] text-white overflow-hidden"
    >
      <div className="container mx-auto">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4 text-white">Our World-Class Campus</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/80">
            Experience a campus designed to inspire learning, innovation, and personal growth. Our state-of-the-art facilities provide the perfect environment for academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Manual Video Carousel with Clip Style */}
          <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <iframe
                src={videoUrls[videoIndex]}
                title={`Campus Video ${videoIndex + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex justify-between mt-4 px-4">
              <button
                onClick={prevVideo}
                className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full shadow transition"
              >
                ⬅ Prev
              </button>
              <button
                onClick={nextVideo}
                className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full shadow transition"
              >
                Next ➡
              </button>
            </div>
          </div>

          {/* Image Slider */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Slider {...sliderSettings} className="rounded-xl overflow-hidden shadow-xl">
              {campusImages.map((image, index) => (
                <div key={index} className="h-[300px] md:h-[350px]">
                  <img
                    src={image}
                    alt={`Campus View ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Modern Classrooms",
              desc: "Technology-enabled learning spaces designed for collaborative education.",
              img: "https://source.unsplash.com/600x400/?classroom"
            },
            {
              title: "Research Labs",
              desc: "State-of-the-art facilities for groundbreaking research and innovation.",
              img: "https://source.unsplash.com/600x400/?laboratory"
            },
            {
              title: "Library & Learning Centers",
              desc: "Extensive resources and quiet spaces for focused study and research.",
              img: "https://source.unsplash.com/600x400/?library"
            },
            {
              title: "Sports Complex",
              desc: "World-class athletic facilities for physical fitness and competitive sports.",
              img: "https://www.shutterstock.com/image-photo/banner-sport-collage-athletes-action-260nw-2462169769.jpg"
            }
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg p-4 md:p-6 text-white transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-40 overflow-hidden rounded-2xl mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-200 mb-2">{item.title}</h3>
              <p className="text-sm text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campus;
