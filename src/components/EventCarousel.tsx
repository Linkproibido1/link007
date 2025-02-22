import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { EventCard } from './EventCard';
import { events } from '../data/events';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const EventCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      className="w-full"
    >
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <EventCard event={event} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};