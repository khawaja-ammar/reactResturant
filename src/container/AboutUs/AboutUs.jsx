import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';

/*
app__aboutus
  app__aboutus-overlay
    img
  app__aboutus-content
    app__aboutus-content_about
      h1
      img
      p
      button
    
    app__aboutus-content_knife
      img
    
    app__aboutus-content_history
      h1
      img
      p
      button
    
*/

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G}  alt='g letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>        
        <p className='p__opensans'>it might not be the right time, i might not be the right guy, but there is something about us i've got to, cause there is something between us anyway</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt='history_spoon' className='spoon__img'/>        
        <p className='p__opensans'>it might not be the right time, i might not be the right guy, but there is something about us i've got to, cause there is something between us anyway</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
