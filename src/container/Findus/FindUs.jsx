import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
    <SubHeading title="Contact"/>
    <h1 className='headtext__cormorant' style={{marginTop: '3rem'}}>Find Us</h1>
    <div className='app__wrapper-content'>
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
      <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
      <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
    </div>

    <button type='button' className='custom__button'>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
