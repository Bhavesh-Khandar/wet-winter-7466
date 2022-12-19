import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
export default function Login() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const [login, isLogin] = useState(false);
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/register`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function signIn() {
    {
      data &&
        data?.length > 0 &&
        data.filter((e) => {
          if (e.email == form.email && e.password == form.password) {
            // return <Navigate to="/products" />;
            isLogin(true);
          } else {
            console.log('failure');
            <Alert status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>;
          }
        });
    }
  }

  console.log(data);
  return login ? (
    <Navigate to="/products" />
  ) : (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={(e) => handleOnChange(e)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={(e) => handleOnChange(e)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                onClick={signIn}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
