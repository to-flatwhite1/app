import AccordionComponent from '@/components/accordion/Accordion';
import { Header } from '@/components/layout/header/Header';
import Section from '@/components/section/Section';
import SlideSwiper from '@/components/swiper/Swiper';
import { Accordion, Button } from '@chakra-ui/react';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <Header />
            <SlideSwiper />
            <Section />/
            <AccordionComponent />
        </>
    );
};

export default HomePage;
