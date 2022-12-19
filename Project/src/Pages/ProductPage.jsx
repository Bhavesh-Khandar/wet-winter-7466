import React, { useEffect } from 'react';
import axios from 'axios';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';
const ProductPage = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/sephora`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  console.log(data.img);
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data &&
          data?.length > 0 &&
          data.map((e) => {
            return (
              <GridItem key={e.id}>
                <ProductCard
                  //   category={e.category}
                  image={e.image}
                  id={e.id}
                  prodname={e.prodname}
                  title={e.title}
                  price={e.price}
                  // rating={e.rating.rate}
                  // count={e.rating.count}
                />
              </GridItem>
            );
          })}
      </Grid>
      <Footer />
    </div>
  );
};

export default ProductPage;
