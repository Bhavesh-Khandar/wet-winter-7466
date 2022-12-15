import React from 'react';
import Carousel from '../Components/HomeCarousel';
// import HomeCarousel from '../Components/HomeCarousel';
import { Image } from '@chakra-ui/react';
const HomePage = () => {
  return (
    <div>
      HomePage
      <div>
        <Image src="https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/1DEC22-Christmas-Advent-Calender-Strip-Desk-2x-re.jpg" />
      </div>
      <div style={{ height: '500px' }}>
        <Carousel />
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default HomePage;
