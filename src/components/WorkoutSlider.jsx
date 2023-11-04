import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import '../workoutSlider.css'


import { Navigation } from 'swiper'

const WorkoutSlider = ({programs}) => {
  return (
    <Swiper
    slidesPerView={2}
    spaceBetween={32}
    grabCursor
    navigation
    breakpoints={{
      200: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }}
    modules={[Navigation]}
    className='workoutSlider'
    >
      {
        programs.map(({image, name}, i) => (
          <SwiperSlide 
          className='max-w-[320px] max-h-[320px] relative'
          key={i}>
            <img 
            className='w-ful h-full object-cover'
            src={image} 
            alt={name} />
            <div className='absolute left-[1.2rem] bottom-[1.2rem] bg-white
            h-[26px] px-[0.8rem] flex items-center rounded-[1px]'>
              <p className='font-family font-semibold text-sm text-neutral-500'>
              {name}
                </p></div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};

export default WorkoutSlider;
