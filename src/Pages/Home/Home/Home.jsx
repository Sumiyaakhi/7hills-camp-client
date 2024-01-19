import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../../Category/Category';
import About_Us from '../About_Us/About_Us';
import Tour_Our_Camp from '../Tour_Our_Camp/Tour_Our_Camp';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <About_Us></About_Us>
      <Tour_Our_Camp></Tour_Our_Camp>
    </div>
  );
};

export default Home;