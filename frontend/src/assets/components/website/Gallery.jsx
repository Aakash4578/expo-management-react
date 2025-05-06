import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

function Gallery() {
  const images = [
    'assets/gallery/0.jpg', 'assets/gallery/1.jpg', 'assets/gallery/2.jpg', 'assets/gallery/3.jpg',
    'assets/gallery/4.jpg', 'assets/gallery/5.jpg', 'assets/gallery/6.jpg', 'assets/gallery/pic12.jpg',
    'assets/gallery/8.jpg', 'assets/gallery/9.jpg', 'assets/gallery/10.jpg', 'assets/gallery/11.jpg'
  ];

  return (
    <section className="gallery-section">
      <div className="heading-style-1 mb-4">
        <h2>We plan & design weddings. That captures the imagination.</h2>
      </div>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Event ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Gallery;
