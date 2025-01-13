import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    console.log(progress);
    const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
    if (activeBullet) {
      activeBullet.style.setProperty('--progress', progress);
    }
  };
  


  return (
    <div className='max-w-2xl sm-swiper-js h-screen flex justify-center items-center mx-auto'>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className='w-full h-[600px] '>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/29100028/pexels-photo-29100028/free-photo-of-close-up-of-butterfly-on-vibrant-orange-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-[600px]'>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/29100028/pexels-photo-29100028/free-photo-of-close-up-of-butterfly-on-vibrant-orange-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-[600px]'>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/29100028/pexels-photo-29100028/free-photo-of-close-up-of-butterfly-on-vibrant-orange-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-[600px]'>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/29889896/pexels-photo-29889896/free-photo-of-autumn-pathway-in-istanbul-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </SwiperSlide>
      
      {/* <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div> */}
    </Swiper>
  </div>
  )
}

export default Home