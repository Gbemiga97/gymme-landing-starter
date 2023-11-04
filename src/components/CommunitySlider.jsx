import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

const CommunitySlider = ({testimonials}) => {
  return (
    <Swiper 
    slidesPerView={3}
    spaceBetween={32}
    centeredSlides={'auto'}
    grabCursor={true}
    >
      {
        testimonials.map(({image, name, message}, i) => (
          <SwiperSlide key={i}>
            <div className='relative'>

              <div>
                <img src={image} alt={name} />
              </div>

              <div className='absolute bottom-[1.8rem] text-white p-[20px] text-center'>
                <p className='mb-8 italic text-lg '>{message}</p>
                <h5 className='text-[20px] font-semibold text-white'>
                  <span className='text-[1.8rem] text-primary-200 font-normal mr-1'>
                    ~</span>
                  {name}
                  </h5>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};

export default CommunitySlider;
