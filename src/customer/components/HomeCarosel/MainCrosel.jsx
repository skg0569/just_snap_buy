import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';




const MainCrosel = () => {


    const items = MainCaroselData.map((item) => (
            <img className='cursor-pointer -z-30' role='presentation' src={item.image} alt={item.path} />
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    )


};

export default MainCrosel;