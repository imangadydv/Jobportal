import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // For Swiper v9 and newer

const jobCategories = [
  { id: 1, title: "Software Development" },
  { id: 2, title: "Data Science" },
  { id: 3, title: "Design" },
  { id: 4, title: "Marketing" },
  { id: 5, title: "Sales" },
  { id: 6, title: "Customer Support" },
];

const JobCategoriesCarousel = () => {
  return (
    <div className="flex justify-center my-6">
      <div className="w-full max-w-4xl"> 
        <h2 className="text-2xl font-bold mb-4 text-center">Job Categories</h2>
        <Swiper
          spaceBetween={30} 
          slidesPerView={3} 
          breakpoints={{
            640: {
              slidesPerView: 1, 
            },
            768: {
              slidesPerView: 2, 
            },
            1024: {
              slidesPerView: 3, 
            },
          }}
          style={{ height: '40px' }} 
        >
          {jobCategories.map((category) => (
            <SwiperSlide key={category.id} style={{ height: '100%' }}> 
              <div className="bg-black text-white text-center p-2 rounded shadow-lg h-full flex items-center justify-center">
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default JobCategoriesCarousel;
