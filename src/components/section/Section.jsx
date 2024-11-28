'use client';
import React from 'react';
import SectionSwiper from '../swiper/sectionSwiper';

import BetweenSwiper from '../swiper/betweenSwiper';
import TopRatedSectionSwiper from '../swiper/videoSwiper';

const Section = () => {
    return (
        <>
            <div className="w-11/12 mx-auto">
                <h1 className="text-lg text-white  font-bold my-5">무비차트 | 현재상영작</h1>
                <SectionSwiper />
                <h1 className="text-lg text-white  font-bold my-5">무비차트 | 개봉예정작</h1>
                <BetweenSwiper />
                <h1 className="text-lg text-white font-bold my-5">무비차트 | 인기상영작</h1>
                <TopRatedSectionSwiper />
            </div>
        </>
    );
};

export default Section;
