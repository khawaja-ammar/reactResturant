import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

/*
app__header
  div
    SubHeading
    app__header-h1
  div

*/

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The key to fine dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Sir tell us what is going on with your life, call us we want to know how u are what u are where u are going where do you wanna be etc etc</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
   
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header-img' />
    </div>
  </div>
);

export default Header;
