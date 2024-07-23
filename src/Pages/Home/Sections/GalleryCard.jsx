import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Box, Typography, IconButton } from '@mui/material';
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import { LuMonitorSmartphone } from "react-icons/lu";
import { CustomCard } from '../../../Components';
import 'swiper/swiper-bundle.css';

const GalleryCard = () => {
  const swiperRef = useRef(null);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const Next = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const Prev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <CustomCard height="250px">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
       
        <Typography sx={{ width:'100%', fontWeight:600, display: 'flex', justifyContent: 'end', alignItems: 'center', gap:2, color:"#005050" }}> גלרית תמונות <LuMonitorSmartphone /></Typography>
      </Box>
      <Box sx={{ position: 'relative', }}>
        <Swiper
          ref={swiperRef}
          modules={[ Autoplay]}
          // pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 2000 }}
          loop={true}
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 5,
            },
          }}
          style={{ width:"95%" }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginLeft:'30px'
                }}
              >
                <Box
                  sx={{
                    height: '140px',
                    width: '150px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                   <img
                    src="G1.png"
                    alt="Welcome Image"
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          onClick={Prev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            zIndex: 50,
          }}
        >
          <IoIosArrowBack />
        </IconButton>
        <IconButton
          onClick={Next}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
            zIndex: 50,
          }}
        >
          <IoIosArrowForward />
        </IconButton>
      </Box>
    </CustomCard>
  );
};

export default GalleryCard;
