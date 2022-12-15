import {
  Box,
  Button,
  Center,
    Flex,
  Text,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import ModelPage from '../Components/Model';
export default function CartCard({ cartdata }) {
  //  const [counter, setCounter] = useState(1);
  console.log(cartdata.image);
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
            // backgroundImage: `url(${IMAGE})`,
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
            src={cartdata.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          {/* <Flex>
            <Button disabled={counter <= 0} onClick={() => handleCount(-1)}>
              -
            </Button>
            <Text>Qty:{counter}</Text>
            <Button disabled={counter == count} onClick={() => handleCount(1)}>
              +
            </Button>
          </Flex> */}
          {/* <Text>TotalPrice:{counter * price}</Text> */}
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {cartdata.price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              {cartdata.price}
            </Text>
          </Stack>
          <ModelPage />
        </Stack>
      </Box>
    </Center>
  );
}
