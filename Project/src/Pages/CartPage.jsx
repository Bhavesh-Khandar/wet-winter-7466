import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
    Button,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ModelPage from '../Components/Model';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function CartPage()
{
    const [cart, setCart] = useState({});
    const { id } = useParams();
    const [counter, setCounter] = useState(1);
    useEffect(() =>
    {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) =>
        {
            setCart(data);
        });
    }, [id]);
    const { image, price, title,count } = cart;
    const handleCount = (val) =>
    {
        setCounter(counter+val)
        }
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Flex>
            <Button disabled={counter <= 0} onClick={() => handleCount(-1)}>
              -
            </Button>
            <Text>Qty:{counter}</Text>
            <Button disabled={counter == count} onClick={() => handleCount(1)}>
              +
            </Button>
                  </Flex>
                  <Text>
                      TotalPrice:{counter*price}
                  </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              {price}
            </Text>
                  </Stack>
                  <ModelPage/>
        </Stack>
      </Box>
    </Center>
  );
}
