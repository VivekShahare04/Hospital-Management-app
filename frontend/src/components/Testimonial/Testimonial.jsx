import React from 'react' 
import {Pagination} from 'swiper' 
import {Swiper, SwiperSlide} from 'swiper/react' 
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assert/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi' 

const Testimonial = () => {
   return (
      <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules = {[Pagination]} spaceBetween={30} slides PerView={1} pagination={{clickable:true}}
         breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
           },
         768: { 
          slidesPerView: 2,
          spaceBetween: 20,
        },
         1024: {
         slidesPerView: 3,
         spaceBetween: 30,
         },
        }}>

    <SwiperSlide>
       <div className="py-[30px] px-5 rounded-3">
          <div className="flex items-center gap-[13px]">
           <img src={patientAvatar} alt=""/>
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Aditya Ingale
                </h4>
                <div className='flex item-center gap-[2px]'>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    
                </div>
              </div>
          </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
          "Website navigation confusing, slow loading times make appointment booking frustrating."
          </p>
       </div>
    </SwiperSlide>
    <SwiperSlide>
       <div className="py-[30px] px-5 rounded-3">
          <div className="flex items-center gap-[13px]">
           <img src={patientAvatar} alt=""/>
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Vivek Shahare
                </h4>
                <div className='flex item-center gap-[2px]'>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                </div>
              </div>
          </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            "The website boasts intuitive navigation and efficient booking processes, ensuring a seamless and satisfying user experience."
          </p>
       </div>
    </SwiperSlide>
    <SwiperSlide>
       <div className="py-[30px] px-5 rounded-3">
          <div className="flex items-center gap-[13px]">
           <img src={patientAvatar} alt=""/>
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Pranesh Patil
                </h4>
                <div className='flex item-center gap-[2px]'>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    
                </div>
              </div>
          </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            ""Efficient, user-friendly interface. Seamless appointment scheduling for optimal patient care."
          </p>
       </div>
    </SwiperSlide>
    <SwiperSlide>
       <div className="py-[30px] px-5 rounded-3">
          <div className="flex items-center gap-[13px]">
           <img src={patientAvatar} alt=""/>
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Shruti Meshram
                </h4>
                <div className='flex item-center gap-[2px]'>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                </div>
              </div>
          </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            "Highly impressed by the website's ease of navigation and convenience."
          </p>
       </div>
    </SwiperSlide>
    <SwiperSlide>
       <div className="py-[30px] px-5 rounded-3">
          <div className="flex items-center gap-[13px]">
           <img src={patientAvatar} alt=""/>
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Suyash Tupe
                </h4>
                <div className='flex item-center gap-[2px]'>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                    
                </div>
              </div>
          </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            "I have taken medical services from  them.They treat so well and they are provding and best medical services."
          </p>
       </div>
    </SwiperSlide>
   </Swiper> 
</div>

  );
};

export default Testimonial;