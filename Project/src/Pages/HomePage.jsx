import React from 'react';
import Carousel from '../Components/HomeCarousel';
// import HomeCarousel from '../Components/HomeCarousel';
import { Image } from '@chakra-ui/react';

import styles from '../styles/menubar.module.css';
import homepage from '../styles/homepage.module.css';
import TabComponent from '../Components/TabComponent';
import Carousel2 from '../Components/HomeCarousel2';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div>
      {/* HomePage */}
      <div>
        <Image src="https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/1DEC22-Christmas-Advent-Calender-Strip-Desk-2x-re.jpg" />
      </div>
      <div className={styles.menubarbox}></div>
      {/* <TabComponent /> */}
      <div style={{ height: '500px' }}>
        <Carousel />
      </div>
      <div>
        <Image src="https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/headers/dsk/7DEC-HP-Headers-Dsk-01.gif"></Image>
      </div>
      <div className={homepage.bigbox}>
        <div className={homepage.innerbox}>
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/04-nov-2022/hp/7th/ATV1.jpg"></Image>
        </div>
        <div className={homepage.innerbox}>
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/04-nov-2022/hp/7th/ATV1.jpg"></Image>
        </div>
        <div className={homepage.innerbox}>
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/04-nov-2022/hp/7th/ATV1.jpg"></Image>
        </div>
      </div>
      <div>
        <Image src="https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/NewArrivals-Strip-DSK.jpg"></Image>
      </div>
      <div>
        <Image src="https://logan.nnnow.com/content/dam/nnnow-project/16-dec-2022/hp/01DEC22-CAT2-STRIP-GIFTINGGUIDE-DSK.jpg"></Image>
      </div>
      <div>
        <Image src="https://logan.nnnow.com/content/dam/nnnow-project/06-dec-2022/hp/headers/dsk/7DEC-HP-Headers-Dsk-02.gif"></Image>
      </div>
      <Footer />
      {/* <Sidebar /> */}
      {/* <Carousel2 /> */}
    </div>
  );
};

export default HomePage;
