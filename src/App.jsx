import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'; // Adjusting imports

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'; // Make sure this file exists for any custom styles

const App = () => {
  // Array of screenshot image paths
  const screenshots = [
    'image/Screenshot (1).jpg',
    'image/Screenshot (2).jpg',
    'image/Screenshot (3).jpg',
    'image/Screenshot (4).jpg',
    'image/Screenshot (5).jpg',
    'image/Screenshot (6).jpg',
    'image/Screenshot (7).jpg',
    'image/Screenshot (8).jpg',
    'image/Screenshot (9).jpg',
    'image/Screenshot (10).jpg',
    'image/Screenshot (11).jpg',
    'image/Screenshot (12).jpg',
    'image/Screenshot (13).jpg',
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  
      <header class="text-center bg-gradient-to-r from-indigo-500 to-purple-500 p-8 rounded-lg">
  <h1 class="text-4xl font-bold text-white mb-2">Plan Your Dream Vacation</h1>
  <p class="text-lg text-white mb-4">
    Discover personalized itineraries tailored to your preferences. Enter your travel details and let our AI do the magic!
  </p>
  <p class="text-lg text-white mb-4">
   Download App from below
  </p>
</header>

      <section className="mb-8 w-full">

        <Swiper
          pagination={{ clickable: true }} // Enable clickable pagination
          navigation // Enable navigation buttons
          modules={[Pagination, Navigation]} // Ensure these are correctly imported
          className="mySwiper p-12"
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {screenshots.map((screenshot, index) => (
            <SwiperSlide key={index}>
              <img src={screenshot} alt={`Screenshot ${index + 1}`} className="w-24 object-cover rounded-lg" /> {/* Decreased width */}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <a
        href="/base.apk"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
      >
        Download the App
      </a>

      <footer className="mt-8 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Ankush Sahagal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
