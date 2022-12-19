import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function ProductCard({
  id,
  image,
  prodname,
  category,
  title,
  price,
  rating,
  count,
}) {
  let disprice = price * 1.2;
  console.log(disprice);
  console.log();
  return (
    <Center py={12}>
      <RouterLink to={`/product/${id}`}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          height={'auto'}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'auto'}
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
              height={'auto'}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}>
              {category}
            </Text>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}>
              {prodname}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {price}
              </Text>
              {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                {Math.round(disprice, 2)}
              </Text> */}
            </Stack>
          </Stack>
        </Box>
      </RouterLink>
    </Center>
  );
}
