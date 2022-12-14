import React, { useEffect } from 'react';
import axios from 'axios';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';
const ProductPage = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      //consoel.log(res.data)
      setData(res.data);
    });
  }, []);
  console.log(data)
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data&&data?.length > 0 &&
          data.map((e) => {
            return (
              <GridItem key={e.id}>
                <ProductCard
                  category={e.category}
                  image={e.image}
                  id={e.id}
                  description={e.description}
                  title={e.title}
                  price={e.price}
                  rating={e.rating.rate}
                  count={e.rating.count}
                />
              </GridItem>
            );
          })}
      </Grid>
    </div>
  );
};

export default ProductPage;